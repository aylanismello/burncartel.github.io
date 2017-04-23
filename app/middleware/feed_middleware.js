import { feedConstants,
	receiveTracks,
 	loadingStart,
	loadingStop,
	updateTrackId,
	resetPage,
	incrementPage,
	resetTracks,
	fetchTracks,
	updatePageTitle,
	updateFocusedTrackId,
	updatePlayingTrackId,
	receivePlayingTracks
} from '../actions/feed_actions';
import {
	togglePlay
} from '../actions/player_actions';
import { getFeedTracksHash } from '../selectors/track_selector';
import { FEEDS } from '../reducers/feed_reducer';
import {
	getTracks,
	getLikes
} from '../util/bc_api';
import * as _ from 'lodash';


const FeedMiddleware = ({ getState, dispatch }) => next => action => {
	switch(action.type) {

		case feedConstants.PAGINATE_TRACKS:
			dispatch(fetchTracks(getState().feed.focusedFeed.filters, true));
			return next(action);
		case feedConstants.FETCH_TRACKS:
			dispatch(loadingStart());

			if(action.isNewPage) {
				dispatch(incrementPage());
			} else {
				// if not new page, we have a need feed load...
				// might need to clear the feed.focusedFeed.tracks here too
				dispatch(resetPage());
				dispatch(resetTracks());
			}

			if(getState().feed.focusedFeed.feedType === FEEDS.FIRE) {
				getTracks({ sort: 'influential', ...action.filters}, (tracks) => {
					dispatch(loadingStop());
					dispatch(receiveTracks(tracks));
				}, (error) => {
					// make error reducer here
					console.log(`ERROR FETCHING TRACKS: got ${error}`);
				}, getState().feed.focusedFeed.page);
			} else if(getState().feed.focusedFeed.feedType === FEEDS.LIKES) {

				getLikes(getState().feed.focusedFeed.userLikeId, (tracks) => {
					dispatch(loadingStop());
					dispatch(receiveTracks(tracks));
				}, (error) => {
					console.log(`ERORR GETTING ${error}`);
				});

			}

			return next(action);
		case feedConstants.HANDLE_TRACK_CLICK:
			// GOING TO NEW TRACK
			if(action.clickType === 'play') {
				if(getState().feed.playingFeed.trackId !== action.trackId) {
					// change this to .real_name when that story is completed
					const newTrackName = getFeedTracksHash(getState())[action.trackId].name;
					dispatch(updatePageTitle(newTrackName));

					dispatch(updatePlayingTrackId(action.trackId));

					// here we copy over feed.focusedFeed to feed.playingFeed if they are not equal

					const tracksInFocus = getState().feed.focusedFeed.tracks;

					if(!_.isEqual(getState().feed.playingFeed.tracks, tracksInFocus)) {
						console.log('you just started playing a track from a new feed (one that is not focused)!');
						// playingFeed = deepClone of currentFeed?
						dispatch(receivePlayingTracks(tracksInFocus));
					}

					if(!getState().player.playing) {
						dispatch(togglePlay());
					}
				} else {
					dispatch(togglePlay()); 	// TOGGLING OLD TRACK
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
