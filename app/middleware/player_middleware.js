import {
	playerConstants,
	togglePlay,
	initPlayer
} from '../actions/player_actions';

const PlayerMiddleware = ({ getState, dispatch }) => next => action => {
	switch(action.type) {
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
