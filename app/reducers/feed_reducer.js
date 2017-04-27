import { feedConstants } from '../actions/feed_actions';
import { getFeedTracksHash, getTrackIdx } from '../selectors/track_selector';
import * as _ from 'lodash';

export const FEEDS = {
	FIRE: 'FIRE',
	LIKES: 'LIKES',
	CURATORS: 'CURATORS',
	PUBLISHERS: 'PUBLISHERS',
	SINGLE_TRACK: 'SINGLE_TRACK'
}

const initialState = {
	focusedFeed: {
		tracks: [],
		userLikeId: -1,
		trackId: -1,
		page: 1
	},
	FIRE: {

	},
	LIKES: {

	},
	PUBLISHERS: {
		// name: null,
		// permalink_url: null,
		// track_count: null,
		// followers_count: null,
		// followings_count: null,
		// num_curators: null,
		// avatar_url: null,
		// country: null,
		// city: null,
		// curators: [],
		// handles: []
		// sorted_tracks: [] this is just tracks in the outer state
	}, //then these are mapped to /resources request from API
	CURATORS: {

	},
	SINGLE_TRACK: {

	},
	playingFeed: {
		tracks: [],
			// might need any number of metadatas here
		feedName: ""
	},
	loadingFeed: true,
	feedType: null,
	filters: {}
};

const FeedReducer = (state = initialState, action) => {
	switch(action.type) {
		case feedConstants.RECEIVE_FEED_METADATA:
			const newMetadataState = _.cloneDeep(state);
			newMetadataState[action.feedType.toUpperCase()] = action.metadata;
			return newMetadataState;
		case feedConstants.SET_LIKE_FEED_USER_ID:
			return { ...state, focusedFeed: {...state.focusedFeed, userLikeId: action.userId }};
		case feedConstants.SET_FEED_TYPE:
			return { ...state, feedType: action.feedType };
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
			// break pagination plz
			// return { ...state, focusedFeed: {...state.focusedFeed, tracks: [ ...state.focusedFeed.tracks, ...action.tracks ] } };
			return { ...state, focusedFeed: {...state.focusedFeed, tracks: action.tracks } };
		case feedConstants.RECEIVE_PLAYING_TRACKS:
			return { ...state, playingFeed: { ...state.playingFeed, tracks: action.tracks } };
		case feedConstants.UPDATE_FILTERS:
			return { ...state, filters: action.filters };
		case feedConstants.SET_PLAYING_FEED_NAME:
			return { ...state, playingFeed: { ...state.playingFeed, feedName: action.feedName } };
		case feedConstants.UPDATE_TRACK_ID:
			return { ...state, focusedFeed: {...state.focusedFeed, trackId: action.trackId } };
		case feedConstants.UPDATE_FOCUSED_TRACK_ID:
			return { ...state, focusedFeed: {...state.focusedFeed, trackId: action.trackId } };
		case feedConstants.UPDATE_PLAYING_TRACK_ID:
			return { ...state, playingFeed: {...state.playingFeed, trackId: action.trackId } };
		case feedConstants.LOADING_START:
			return { ...state, loadingFeed: true };
		case feedConstants.LOADING_STOP:
			return { ...state, loadingFeed: false };
		default:
			return state;
	}
};

export default FeedReducer;
