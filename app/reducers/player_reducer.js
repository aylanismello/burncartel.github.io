import { playerConstants } from '../actions/player_actions';

const initialState = {
	playerInitialized: false,
	playing: false
};

const PlayerReducer = (state = initialState, action) => {
	switch(action.type) {
		case playerConstants.TOGGLE_PLAY:
			return { ...state, playing: !state.playing }
		case playerConstants.INIT_PLAYER:
			return { ...state, playerInitialized: true }
		default:
			return state;
	}
};

export default PlayerReducer;
