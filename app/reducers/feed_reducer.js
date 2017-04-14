import { feedConstants } from '../actions/feed_actions';
import { getFeedTracksHash, getTrackIdx } from '../selectors/track_selector';
import * as _ from 'lodash';


const initialState = {
	tracks: [],
	filters: {
		// sort: 'influential',
		curator: -1
	},
	trackId: -1,
	loadingFeed: true,
	page: 1
};

const FeedReducer = (state = initialState, action) => {
	switch(action.type) {
		case feedConstants.UPDATE_TRACK_LIKE_COUNT:

			let updateTracksWithLikeCount = state.tracks.map((track, idx) => {
				if(track.id === action.trackId) {
					return { ...track, num_likes: action.likeCount };
				} else {
					return track;
				}
			});

			return { ...state, tracks: updateTracksWithLikeCount };
		case feedConstants.INCREMENT_PAGE:
			return { ...state, page: (state.page + 1) }
		case feedConstants.RESET_PAGE:
			return { ...state, page: 1 };
		case feedConstants.RESET_TRACKS:
			return { ...state, tracks: [] };
		case feedConstants.RECEIVE_TRACKS:
			const newTracks = {};
			// why is this even still here?
			// doesn't the track selector do this for us?
			action.tracks.forEach((track) => {
				newTracks[track.id] = track;
			});

			// for some reason the last tracks from old tracks and new tracks double up
			return { ...state, tracks: [ ...state.tracks, ...action.tracks.slice(1) ] };
		case feedConstants.UPDATE_FILTERS:
			const newFilters = { ...initialState.filters, ...action.filters } ;
			const newState = { ...state, filters: newFilters };
			return newState;
		case feedConstants.UPDATE_TRACK_ID:
			return { ...state, trackId: action.trackId };
		case feedConstants.LOADING_START:
			return { ...state, loadingFeed: true };
		case feedConstants.LOADING_STOP:
			return { ...state, loadingFeed: false };
		default:
			return state;
	}
};

export default FeedReducer;
