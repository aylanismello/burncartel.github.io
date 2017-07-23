import {
	playerConstants,
	togglePlay,
	initPlayer
} from '../actions/player_actions';

import { reshuffleTracks } from '../actions/feed_actions';

const PlayerMiddleware = ({ getState, dispatch }) => next => action => {
	switch (action.type) {
		case playerConstants.TOGGLE_SHUFFLE:
			// transitioning to shuffle state, re-shuffle tracks in player reducer
			if (!getState().shuffle) {
				dispatch(reshuffleTracks());
			}
			return next(action);
		case playerConstants.TOGGLE_PLAY:
			if (!getState().player.playerInitialized) {
				dispatch(initPlayer());
			}
			return next(action);
		default:
			return next(action);
	}
};

export default PlayerMiddleware;
