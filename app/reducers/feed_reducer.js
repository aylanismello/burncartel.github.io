import { feedConstants } from '../actions/feed_actions';
const initialState = {
	tracks: [],
	currentFilter: 'influential',
	trackIdx: 0
};
// consider doing obejct for tracks...
// with trackId: {trackObj..} structure instead

const FeedReducer = (state = initialState, action) => {
	switch(action.type) {
		case feedConstants.RECEIVE_TRACKS:
			return Object.assign({}, state, { tracks: action.tracks });
		case feedConstants.UPDATE_FILTER:
			return Object.assign({}, state, { currentFilter: action.filter });
		case feedConstants.UPDATE_TRACK_IDX:
			return Object.assign({}, state, { trackIdx: action.trackIdx });
		default:
			return state;
	}
};

export default FeedReducer;
