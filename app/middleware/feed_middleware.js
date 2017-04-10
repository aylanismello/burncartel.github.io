import { feedConstants,
	receiveTracks,
 	loadingStart,
	loadingStop,
	updateTrackId,
	resetPage,
	incrementPage,
	resetTracks
} from '../actions/feed_actions';
import {
	togglePlay
} from '../actions/player_actions';

import { getTracks } from '../util/bc_api';

const FeedMiddleware = ({ getState, dispatch }) => next => action => {
	switch(action.type) {
		case feedConstants.FETCH_TRACKS:
			dispatch(loadingStart());

			if(action.isNewPage) {
				dispatch(incrementPage());
			} else {
				// if not new page, we have a need feed load...
				// might need to clear the feed.tracks here too
				dispatch(resetPage());
				dispatch(resetTracks());
			}

			getTracks({ sort: 'influential', ...action.filters}, (tracks) => {
				dispatch(loadingStop());
				dispatch(receiveTracks(tracks));
			}, (error) => {
				// make error reducer here
				console.log(`ERROR FETCHING TRACKS: got ${error}`);
			}, getState().feed.page);
			return next(action);
		case feedConstants.HANDLE_TRACK_CLICK:
			// GOING TO NEW TRACK
			if(getState().feed.trackId !== action.trackId) {
				dispatch(updateTrackId(action.trackId));
				if(!getState().player.playing) {
					dispatch(togglePlay());
				}
			} else {
				dispatch(togglePlay()); 	// TOGGLING OLD TRACK
			}
				// what if you're coming from a paused song?
				return next(action);
		default:
			return next(action);
	}
};

export default FeedMiddleware;
