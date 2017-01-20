import { feedConstants } from '../actions/feed_actions';
const initialState = {
	tracks: {},
	currentFilter: 'influential',
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
		case feedConstants.UPDATE_FILTER:
			return Object.assign({}, state, { currentFilter: action.filter });
		case feedConstants.UPDATE_TRACK_ID:
			return Object.assign({}, state, { trackId: action.trackId });
		default:
			return state;
	}
};

export default FeedReducer;
