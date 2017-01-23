import { feedConstants } from '../actions/feed_actions';
const initialState = {
	tracks: {},
	// currentFilter: 'influential',
	filters: {},
	trackIdx: 0,
	trackId: -1,
	userId: -1
};
// consider doing obejct for tracks...
// with trackId: {trackObj..} structure instead

const FeedReducer = (state = initialState, action) => {
	switch(action.type) {
		case feedConstants.RECEIVE_TRACKS:
			const newTracks = {};
			action.tracks.forEach((track) => {
				newTracks[track.id] = track;
			});
			return Object.assign({}, state, { tracks: newTracks });
		case feedConstants.UPDATE_FILTERS:
			return Object.assign({}, state, { filters: action.filters });
		case feedConstants.UPDATE_TRACK_ID:
			return Object.assign({}, state, { trackId: action.trackId });
		case feedConstants.UPDATE_USER_ID:
			return Object.assign({}, state, { userId: action.userId });
		default:
			return state;
	}
};

export default FeedReducer;
