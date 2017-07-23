import { playerConstants } from '../actions/player_actions';

const initialState = {
	playerInitialized: false,
	playing: false,
	trackLoaded: false,
	currentTime: 0,
	repeating: false,
	shuffle: false
};

const PlayerReducer = (state = initialState, action) => {
	switch (action.type) {
		case playerConstants.TOGGLE_PLAY:
			return { ...state, playing: !state.playing };
		case playerConstants.INIT_PLAYER:
			return { ...state, playerInitialized: true };
		case playerConstants.TOGGLE_REPEAT:
			return { ...state, repeating: !state.repeating };
		case playerConstants.TOGGLE_SHUFFLE:
			return { ...state, shuffle: !state.shuffle };
		case playerConstants.SET_TRACK_LOADED:
			return { ...state, trackLoaded: true };
		case playerConstants.SET_TRACK_NOT_LOADED:
			return { ...state, trackLoaded: false };
		case playerConstants.UPDATE_CURRENT_TIME:
			return { ...state, currentTime: action.currentTime };
		default:
			return state;
	}
};

export default PlayerReducer;
