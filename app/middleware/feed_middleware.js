import { feedConstants,
	receiveTracks,
	receiveEpisodes,
 	loadingStart,
	loadingStop,
	updateTrackId
} from '../actions/feed_actions';
import {
	togglePlay
} from '../actions/player_actions';

import { getTracks, getEpisodes } from '../util/bc_api';

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
		case feedConstants.FETCH_EPISODES:
			dispatch(loadingStart());
			// debugger;

			getEpisodes(action.filters, (episodes) => {
				dispatch(loadingStop());
				dispatch(receiveEpisodes(episodes))
			}, (error) => {
				console.log(`ERROR FETCHING EPISODES: got ${error}`);
			});

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
