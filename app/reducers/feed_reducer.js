import * as _ from 'lodash';
import { REHYDRATE } from 'redux-persist/constants';
import { feedConstants } from '../actions/feed_actions';

export const FEEDS = {
	FIRE: 'FIRE',
	LIKES: 'LIKES',
	CURATORS: 'CURATORS',
	PUBLISHERS: 'PUBLISHERS',
	SINGLE_TRACK: 'SINGLE_TRACK'
};

const initialState = {
	focusedFeed: {
		tracks: [],
		userLikeId: -1,
		trackId: -1,
		page: 1
	},
	FIRE: {},
	LIKES: {},
	SEARCH: {
		hasSearchResults: false
	},
	PUBLISHERS: {},
	CURATORS: {},
	LOCATIONS: {},
	SINGLE_TRACK: {},
	USER: {},
	TAGS: {},
	PLAYLISTS: null,
	EXPLORE: null,
	playingFeed: {
		tracks: [],
		trackId: null,
		// might need any number of metadatas here
		feedName: ''
	},
	playingFeedShuffled: {
		tracks: []
	},
	loadingFeed: true,
	feedType: null,
	filters: {},
	pagination: {
		next_tracks_page: null,
		last_tracks_page: null,
		tracks_page: null
	}
};

const FeedReducer = (state = initialState, action) => {
	switch (action.type) {
		// add this is again when we understand what to include/leave out
		// case REHYDRATE:
		// 	return action.payload.feed;
		case feedConstants.RECEIVE_PAGINATION_DATA:
			const { last_tracks_page, next_tracks_page, tracks_page } = action;
			return {
				...state,
				pagination: { last_tracks_page, next_tracks_page, tracks_page }
			};
		case feedConstants.RECEIVE_FEED_METADATA:
			const newMetadataState = _.cloneDeep(state);

			newMetadataState[action.feedType.toUpperCase()] = action.metadata;
			return newMetadataState;
		case feedConstants.SET_LIKE_FEED_USER_ID:
			return {
				...state,
				focusedFeed: { ...state.focusedFeed, userLikeId: action.userId }
			};
		case feedConstants.SET_HAS_SEARCH_RESULTS:
			const { hasSearchResults } = action;
			return { ...state, SEARCH: { ...state.SEARCH, hasSearchResults } };
		case feedConstants.SET_FEED_TYPE:
			return { ...state, feedType: action.feedType };
		case feedConstants.UPDATE_TRACK_LIKE_COUNT:
			let updateTracksWithLikeCount = state.focusedFeed.tracks.map(
				(track, idx) => {
					if (track.id === action.trackId) {
						return { ...track, num_likes: action.likeCount };
					} else {
						return track;
					}
				}
			);

			return {
				...state,
				focusedFeed: { ...state.focusedFeed, tracks: updateTracksWithLikeCount }
			};
		case feedConstants.RESET_TRACKS:
			return { ...state, focusedFeed: { ...state.focusedFeed, tracks: [] } };
		case feedConstants.RECEIVE_TRACKS:
			return {
				...state,
				focusedFeed: {
					...state.focusedFeed,
					tracks: [...state.focusedFeed.tracks, ...action.tracks]
				}
			};
		case feedConstants.RECEIVE_PLAYING_TRACKS:
			return {
				...state,
				playingFeed: { ...state.playingFeed, tracks: action.tracks }
			};
		case feedConstants.RECEIVE_PLAYING_TRACKS_SHUFFLED:
			return {
				...state,
				playingFeedShuffled: {
					...state.playingFeedShuffled,
					tracks: action.tracks
				}
			};
		case feedConstants.UPDATE_FILTERS:
			return { ...state, filters: action.filters };
		case feedConstants.SET_PLAYING_FEED_NAME:
			return {
				...state,
				playingFeed: { ...state.playingFeed, feedName: action.feedName }
			};
		case feedConstants.UPDATE_TRACK_ID:
			return {
				...state,
				focusedFeed: { ...state.focusedFeed, trackId: action.trackId }
			};
		case feedConstants.UPDATE_FOCUSED_TRACK_ID:
			return {
				...state,
				focusedFeed: { ...state.focusedFeed, trackId: action.trackId }
			};
		case feedConstants.UPDATE_PLAYING_TRACK_ID:
			return {
				...state,
				playingFeed: { ...state.playingFeed, trackId: action.trackId }
			};
		case feedConstants.LOADING_START:
			return { ...state, loadingFeed: true };
		case feedConstants.LOADING_STOP:
			return { ...state, loadingFeed: false };
		default:
			return state;
	}
};

export default FeedReducer;
