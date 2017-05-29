import * as _ from 'lodash';
import {
	feedConstants,
	receiveTracks,
	loadingStart,
	loadingStop,
	resetTracks,
	updatePageTitle,
	updateFocusedTrackId,
	updatePlayingTrackId,
	receivePlayingTracks,
	setPlayingFeedName,
	receiveFeed,
	receiveFeedMetadata,
	setFeedType,
	updateFilters,
	receivePaginationData,
	fetchOldFeed
} from '../actions/feed_actions';
import { togglePlay } from '../actions/player_actions';
import { getFeedTracksHash } from '../selectors/track_selector';
import { getFeed } from '../util/bc_api';

let prevSortType;

const FeedMiddleware = ({ getState, dispatch }) => next => action => {
	switch (action.type) {
		case feedConstants.RECEIVE_FEED:
			if (action.feed.sorted_serialized_tracks) {
				// if we have multiple tracks

				dispatch(receivePaginationData(action.feed));
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
			} else {
				nextFeedType = action.filters.resource;
			}

			const isNewPageLoad = feedType && feedType !== nextFeedType;
			const isNewFireFeedFilter =
				feedType &&
				feedType === 'FIRE' &&
				sortType &&
				sortType !== prevSortType;

			if (isNewPageLoad || isNewFireFeedFilter) {
				dispatch(
					receivePaginationData({
						last_tracks_page: null,
						next_tracks_page: null,
						tracks_page: null
					})
				);
			}

			prevSortType = sortType;

			dispatch(setFeedType(nextFeedType));
			dispatch(loadingStart());

			debugger;
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
					const newTrackName = getFeedTracksHash(getState())[action.trackId]
						.name;
					dispatch(updatePageTitle(newTrackName));
					dispatch(updatePlayingTrackId(action.trackId));

					// here we copy over feed.focusedFeed to feed.playingFeed if they are not equal
					const tracksInFocus = getState().feed.focusedFeed.tracks;

					if (!_.isEqual(getState().feed.playingFeed.tracks, tracksInFocus)) {
						console.log(
							'you just started playing a track from a new feed (one that is not focused)!'
						);
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
		case feedConstants.UPDATE_PAGE_TITLE:
			document.title = `${action.trackName} | Fire Feed`;
			return next(action);
		default:
			return next(action);
	}
};

export default FeedMiddleware;
