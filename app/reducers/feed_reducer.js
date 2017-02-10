import { feedConstants } from '../actions/feed_actions';

const FEEDS = {
	FIRE: 'FIRE',
	BC: 'BC'
};

const initialState = {
	tracks: [],
	filters: {
		// sort: 'influential',
		curator: -1
	},
	trackId: -1,
	loadingTracks: false,
	feedType: FEEDS.FIRE,
	bc: {
		episodeTrackId: -1
	}
};

const FeedReducer = (state = initialState, action) => {
	switch(action.type) {
		case feedConstants.RECEIVE_TRACKS:
			const newTracks = {};
			action.tracks.forEach((track) => {
				newTracks[track.id] = track;
			});
			return Object.assign({}, state, { tracks: action.tracks });
		case feedConstants.RECEIVE_EPISODES:
			// debugger;
			// const newEpisodes = {};
			const newEpisodes = action.episodes.map(episode => episode.track);
			// debugger;
			// action.episodes.forEach((episode) => {
			// 	newEpisodes[episode.id] = episode;
			// });
			return { ...state, tracks: newEpisodes };
		case feedConstants.UPDATE_FILTERS:
			// const newFilters = { ...state.filters, ...action.filters } ;
			// this is because we aren't combining filters!!!
			// but might break users track feed view...
			const newFilters = { ...initialState.filters, ...action.filters } ;
			const newState = { ...state, filters: newFilters };
			return newState;
		case feedConstants.UPDATE_TRACK_ID:
			return Object.assign({}, state, { trackId: action.trackId });
		case feedConstants.LOADING_START:
			return { ...state, loadingTracks: true };
		case feedConstants.LOADING_STOP:
			return { ...state, loadingTracks: false };
		case feedConstants.SET_BC_FEED:
			return { ...state, feedType: FEEDS.BC }
		case feedConstants.SET_FIRE_FEED:
			return { ...state, feedType: FEEDS.FIRE }
		default:
			return state;
	}
};

export default FeedReducer;
