import * as _ from 'lodash';
import {
	feedConstants,
	receiveTracks,
	loadingStart,
	loadingStop,
	resetTracks,
	updateFocusedTrackId,
	updatePlayingTrackId,
	receivePlayingTracks,
	setPlayingFeedName,
	receiveFeed,
	receiveFeedMetadata,
	setFeedType,
	updateFilters,
	receivePaginationData,
	fetchOldFeed,
	receivePlayingTracksShuffled,
	setHasSearchResults
} from '../actions/feed_actions';
import { togglePlay, disableShuffle } from '../actions/player_actions';
import { getFeed } from '../util/bc_api';

let prevSortType, prevPlaylistId;

const FeedMiddleware = ({ getState, dispatch }) => next => action => {
	switch (action.type) {
		case feedConstants.RECEIVE_FEED:
			if (action.feed.sorted_serialized_tracks) {
				// if we have multiple tracks

				dispatch(receivePaginationData(action.feed));
				// THIS IS WHY ALL FEEDS NEED TO RETURN PAGINATION INFO
				if (getState().feed.pagination.tracks_page === 1) {
					dispatch(resetTracks());
				}

				dispatch(receiveTracks(action.feed.sorted_serialized_tracks));
				// delete action.feed.sorted_serialized_tracks;
				dispatch(receiveFeedMetadata(getState().feed.feedType, action.feed));
			} else {
				// if we have a single track
				dispatch(resetTracks());
				dispatch(receiveTracks(action.feed));
				dispatch(
					receiveFeedMetadata(getState().feed.feedType, { cool: 'this guy' })
				);
			}
			return next(action);
		case feedConstants.FETCH_OLD_FEED:
			// if filters.page is undefined, we are NOT paginating
			// fix this plz to page defaults to 1

			if (!action.filters.page) {
				dispatch(resetTracks());
				dispatch(receiveFeed(getState().feed.USER));
				dispatch(loadingStop());
			} else {
				getFeed(
					action.filters.resource,
					action.filters,
					feed => {
						dispatch(receivePaginationData(feed));
						dispatch(receiveTracks(feed.sorted_serialized_tracks));
						feed.sorted_serialized_tracks = [
							...getState().feed.USER.sorted_serialized_tracks,
							...feed.sorted_serialized_tracks
						];
						dispatch(receiveFeedMetadata(getState().feed.feedType, feed));
						dispatch(loadingStop());
					},
					error => {
						console.log(`ERROR FETCHING TRACKS: got ${error}`);
					}
				);
			}
			return next(action);
		case feedConstants.RESET_PERSONAL_FEED:
			// SO HACKY, but how else to make sure that the personal feed
			// updates several times in a row after reset has already been
			// switched false -> true ??
			dispatch(
				updateFilters({
					resource: 'user_feed',
					reset: true,
					id: getState().user.currentUser.id,
					dopenessLevel: Math.random()
				})
			);
			return next(action);
		case feedConstants.FETCH_FEED:
			let nextFeedType, sortType;
			const { feedType } = getState().feed;

			if (action.filters.resource === 'tracks' && action.filters.id) {
				nextFeedType = 'SINGLE_TRACK';
			} else if (action.filters.resource === 'tracks') {
				nextFeedType = 'FIRE';
				sortType = action.filters.sortType;
			} else if (action.filters.resource === 'user_feed') {
				nextFeedType = 'USER';
			} else if (action.filters.resource === 'search') {
				nextFeedType = 'SEARCH';
			} else {
				nextFeedType = action.filters.resource;
			}

			// weird edge case where we change between playlists?
			// can't we just do something less horrible?
			let didSwitchPlaylist = false;

			if (
				nextFeedType === 'playlists' &&
				action.filters.id !== prevPlaylistId
			) {
				prevPlaylistId = action.filters.id;
				didSwitchPlaylist = true;
			}

			const isNewPageLoad = feedType && feedType !== nextFeedType;
			const isNewFireFeedFilter =
				feedType &&
				feedType === 'FIRE' &&
				sortType &&
				sortType !== prevSortType;

			// THIS LOGIC LETS US -> SHOW LOADING ON TRACK FEEDS
			if (isNewPageLoad || isNewFireFeedFilter || didSwitchPlaylist) {
				dispatch(
					receivePaginationData({
						last_tracks_page: null,
						next_tracks_page: null,
						tracks_page: null
					})
				);
			} else {
				// does this here mean it's just the same shit??
				// in this event, just trigger next action, which will
				// do nothing else and allow the rehydration logic to take effect
				next(action);
			}

			prevSortType = sortType;

			dispatch(setFeedType(nextFeedType));
			dispatch(loadingStart());

			if (
				nextFeedType === 'USER' &&
				getState().feed.USER.sorted_serialized_tracks &&
				!action.filters.reset
			) {
				dispatch(fetchOldFeed(action.filters));
				return next(action);
			}

			getFeed(
				action.filters.resource,
				action.filters,
				feed => {
					if (action.filters.resource === 'tracks' && action.filters.id) {
						dispatch(receiveFeed([feed]));
						dispatch(loadingStop());
					} else if (action.filters.resource === 'search') {
						// IF WE HAVE A SEARCH, IT IS THE ONLY CONDITION
						// WHERE IT IS OKAY TO RECEIVE AN EMPTY FEED.

						// this means we got back an empty feed
						if (feed.status) {
							dispatch(setHasSearchResults(false));
							dispatch(loadingStop());
						} else {
							// add resource_type to feed metadata!
							feed.resource_type = action.filters.resource_type;

							dispatch(receiveFeed(feed));
							dispatch(setHasSearchResults(true));
							dispatch(loadingStop());
						}
					} else if (
						(action.filters.resource === 'locations' &&
							(action.filters.location_type !== undefined ||
								action.filters.parent_location !== undefined)) ||
						(action.filters.resource === 'playlists' && !action.filters.id)
					) {
						// RECEIVING ONLY LOCATIONS, NO TRACKS
						// TODO: THIS SHOULD BE REFACTORED INTO AN INDEPENDENT MIDDLEWARE CASE!
						if (action.filters.resource === 'playlists') {
							// weird edge case where singular of playlists resource in Feed Reducer is
							// EXPLORE and totally different shape (w/out tracks)
							dispatch(receiveFeedMetadata('EXPLORE', feed));
						} else {
							dispatch(
								receiveFeedMetadata(getState().feed.feedType, {
									metadata: feed
								})
							);
						}
						dispatch(loadingStop());
					} else {
						dispatch(receiveFeed(feed));
						dispatch(loadingStop());
					}
				},
				error => {
					console.log(`ERROR FETCHING TRACKS: got ${error}`);
				}
			);

			return next(action);
		case feedConstants.PAGINATE_TRACKS:
			const { next_tracks_page } = getState().feed.pagination;
			dispatch(
				updateFilters({ ...getState().feed.filters, page: next_tracks_page })
			);

			return next(action);
		case feedConstants.HANDLE_TRACK_CLICK:
			// GOING TO NEW TRACK
			if (action.clickType === 'play') {
				if (getState().feed.playingFeed.trackId !== action.trackId) {
					// change this to .real_name when that story is completed

					dispatch(updatePlayingTrackId(action.trackId));

					// here we copy over feed.focusedFeed to feed.playingFeed if they are not equal
					const tracksInFocus = getState().feed.focusedFeed.tracks;

					const isNewFeed = !_.isEqual(
						getState().feed.playingFeed.tracks,
						tracksInFocus
					);

					if (isNewFeed) {
						// playingFeed = deepClone of currentFeed?
						// also update name of feed for player!
						dispatch(receivePlayingTracks(tracksInFocus));

						let newFeedName;

						const feedType = getState().feed.feedType.toUpperCase();

						if (feedType === 'LIKES') {
							newFeedName = 'LIKES';
						} else if (feedType === 'FIRE') {
							if (getState().feed.filters['sortType']) {
								newFeedName = getState().feed.filters['sortType']; // fuck probs shouldn't call this a reserved keyword
							} else {
								newFeedName = 'some unknown fire';
							}
						} else if (feedType === 'CURATORS') {
							newFeedName = `${getState().feed.CURATORS.name}'s`;
						} else if (feedType === 'PUBLISHERS') {
							newFeedName = `${getState().feed.PUBLISHERS.name}'s`;
						} else if (feedType === 'SINGLE_TRACK') {
							newFeedName = 'track';
						} else {
							newFeedName =
								'NO NAME SET, this means newFeedName wasnt set in HANDLE_TRACK_CLICK';
						}

						dispatch(setPlayingFeedName(newFeedName));
						dispatch(disableShuffle());
						// we have to turn off shuffle to for a new feed!
					} else {
						// if the focusedTracks and playingTracks are the same...
						console.log('wtf');
						// ???
					}

					if (!getState().player.playing) {
						dispatch(togglePlay());
					}
				} else {
					dispatch(togglePlay()); // TOGGLING OLD TRACK
				}
				// what if you're coming from a paused song?
			} else {
				dispatch(updateFocusedTrackId(action.trackId));
			}

			return next(action);
		case feedConstants.RESHUFFLE_TRACKS:
			dispatch(
				receivePlayingTracksShuffled(
					_.shuffle(getState().feed.playingFeed.tracks)
				)
			);
			return next(action);
		default:
			return next(action);
	}
};

export default FeedMiddleware;
