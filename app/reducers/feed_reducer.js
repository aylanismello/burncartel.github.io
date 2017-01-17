import { feedConstants } from '../actions/feed_actions';
const initialState = {
	tracks: [],
	currentFilter: 'influential'
};

const FeedReducer = (state = initialState, action) => {
	switch(action.type) {
		case feedConstants.RECEIVE_TRACKS:
			return Object.assign({}, state, { tracks: action.tracks });
		case feedConstants.UPDATE_FILTER:
			return Object.assign({}, state, { currentFilter: action.filter });
		default:
			return state;
	}
};

export default FeedReducer;
