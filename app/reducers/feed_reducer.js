import { feedConstants } from '../actions/feed_actions';
import { getFeedTracksHash, getTrackIdx } from '../selectors/track_selector';
import * as _ from 'lodash';

export const FEEDS = {
	FIRE: 'FIRE',
	LIKES: 'LIKES'
}

const initialState = {
	focusedFeed: {
		tracks: [],
		filters: {
		},
		userLikeId: -1,
		feedType: FEEDS.FIRE,
		trackId: -1,
		loadingFeed: true,
		page: 1
	},
	playingFeed: {
		tracks: [],
		filters: {
		},
		userLikeId: -1,
		feedType: FEEDS.FIRE,
		trackId: -1,
		loadingFeed: true,
		page: 1
	}
};

const FeedReducer = (state = initialState, action) => {
	switch(action.type) {
		case feedConstants.SET_LIKE_FEED_USER_ID:
			return { ...state, focusedFeed: {...state.focusedFeed, userLikeId: action.userId }};
		case feedConstants.SET_FEED_TYPE:
			return { ...state, focusedFeed: {...state.focusedFeed, feedType: action.feedType } };
		case feedConstants.UPDATE_TRACK_LIKE_COUNT:

			let updateTracksWithLikeCount = state.focusedFeed.tracks.map((track, idx) => {
				if(track.id === action.trackId) {
					return { ...track, num_likes: action.likeCount };
				} else {
					return track;
				}
			});

			return { ...state, focusedFeed: {...state.focusedFeed, tracks: updateTracksWithLikeCount } };
		case feedConstants.INCREMENT_PAGE:
			return { ...state, focusedFeed: {...state.focusedFeed, page: (state.focusedFeed.page + 1) } };
		case feedConstants.RESET_PAGE:
			return { ...state, focusedFeed: {...state.focusedFeed, page: 1 } };
		case feedConstants.RESET_TRACKS:
			return { ...state, focusedFeed: {...state.focusedFeed,  tracks: [] } };
		case feedConstants.RECEIVE_TRACKS:
			const newTracks = {};
			return { ...state, focusedFeed: {...state.focusedFeed, tracks: [ ...state.focusedFeed.tracks, ...action.tracks ] } };
		case feedConstants.RECEIVE_PLAYING_TRACKS:
			return { ...state, playingFeed: { ...state.playingFeed, tracks: action.tracks } };
		case feedConstants.UPDATE_FILTERS:
			const newFilters = { ...initialState.focusedFeed.filters, ...action.filters } ;
			const newState = { ...state, focusedFeed: {...state.focusedFeed, filters: newFilters } };
			return newState;
		case feedConstants.UPDATE_TRACK_ID:
			return { ...state, focusedFeed: {...state.focusedFeed, trackId: action.trackId } };
		case feedConstants.UPDATE_FOCUSED_TRACK_ID:
			return { ...state, focusedFeed: {...state.focusedFeed, trackId: action.trackId } };
		case feedConstants.UPDATE_PLAYING_TRACK_ID:
			return { ...state, playingFeed: {...state.playingFeed, trackId: action.trackId } };
		case feedConstants.LOADING_START:
			return { ...state, focusedFeed: {...state.focusedFeed, loadingFeed: true } };
		case feedConstants.LOADING_STOP:
			return { ...state, focusedFeed: {...state.focusedFeed, loadingFeed: false } };
		default:
			return state;
	}
};

export default FeedReducer;
