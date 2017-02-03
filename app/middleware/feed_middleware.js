import { feedConstants,
	receiveTracks,
 	loadingStart,
	loadingStop,
	updateTrackId
} from '../actions/feed_actions';
import {
	togglePlay
} from '../actions/player_actions';

import { getTracks } from '../util/bc_api';

const FeedMiddleware = ({ getState, dispatch }) => next => action => {
	switch(action.type) {
		case feedConstants.FETCH_TRACKS:
			dispatch(loadingStart());

			getTracks({ sort: 'influential', ...action.filters}, (tracks) => {
				dispatch(loadingStop());
				dispatch(receiveTracks(tracks));
			}, (error) => {
				// make error reducer here
				console.log(`ERROR FETCHING TRACKS: got ${error}`);
			});
			return next(action);
// track click
		case feedConstants.HANDLE_TRACK_CLICK:
				// debugger;
				if(getState().feed.trackId !== action.trackId) {
					dispatch(updateTrackId(action.trackId));
					if(!getState().player.playing) {
						dispatch(togglePlay());
					}
				} else {
					dispatch(togglePlay());
				}

				// what if you're coming from a paused song?


				return next(action);
		default:
			return next(action);
	}
};

export default FeedMiddleware;
