import { feedConstants } from '../actions/feed_actions';
const initialState = {
	tracks: []
};

const FeedReducer = (state = initialState, action) => {
	switch(action.type) {
		case feedConstants.RECEIVE_TRACKS:
			return Object.assign({}, state, { tracks: action.tracks });
		default:
			return state;
	}
};

export default FeedReducer;
