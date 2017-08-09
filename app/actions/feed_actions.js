export const feedConstants = {
	RECEIVE_TRACKS: 'RECEIVE_TRACKS',
	RESET_TRACKS: 'RESET_TRACKS',
	UPDATE_FILTERS: 'UPDATE_FILTERS',
	UPDATE_TRACK_IDX: 'UPDATE_TRACK_IDX',
	UPDATE_TRACK_ID: 'UPDATE_TRACK_ID',
	UPDATE_FOCUSED_TRACK_ID: 'UPDATE_FOCUSED_TRACK_ID',
	UPDATE_PLAYING_TRACK_ID: 'UPDATE_PLAYING_TRACK_ID',
	LOADING_START: 'LOADING_START',
	LOADING_STOP: 'LOADING_STOP',
	HANDLE_TRACK_CLICK: 'HANDLE_TRACK_CLICK',
	UPDATE_TRACK_LIKE_COUNT: 'UPDATE_TRACK_LIKE_COUNT',
	SET_FEED_TYPE: 'SET_FEED_TYPE',
	SET_LIKE_FEED_USER_ID: 'SET_LIKE_FEED_USER_ID',
	PAGINATE_TRACKS: 'PAGINATE_TRACKS',
	UPDATE_PAGE_TITLE: 'UPDATE_PAGE_TITLE',
	RECEIVE_PLAYING_TRACKS: 'RECEIVE_PLAYING_TRACKS',
	SET_PLAYING_FEED_NAME: 'SET_PLAYING_FEED_NAME',
	FETCH_FEED: 'FETCH_FEED',
	RECEIVE_FEED_METADATA: 'RECEIVE_FEED_METADATA',
	RECEIVE_FEED: 'RECEIVE_FEED',
	RECEIVE_PAGINATION_DATA: 'RECEIVE_PAGINATION_DATA',
	FETCH_OLD_FEED: 'FETCH_OLD_FEED',
	RESET_PERSONAL_FEED: 'RESET_PERSONAL_FEED',
	RESHUFFLE_TRACKS: 'RESHUFFLE_TRACKS',
	RECEIVE_PLAYING_TRACKS_SHUFFLED: 'RECEIVE_PLAYING_TRACKS_SHUFFLED',
	SET_HAS_SEARCH_RESULTS: 'SET_HAS_SEARCH_RESULTS'
};

export const setHasSearchResults = hasSearchResults => ({
	type: feedConstants.SET_HAS_SEARCH_RESULTS,
	hasSearchResults
});

export const receivePlayingTracksShuffled = tracks => ({
	type: feedConstants.RECEIVE_PLAYING_TRACKS_SHUFFLED,
	tracks
});

export const resetPersonalFeed = () => ({
	type: feedConstants.RESET_PERSONAL_FEED
});

export const reshuffleTracks = () => ({
	type: feedConstants.RESHUFFLE_TRACKS
});

export const receivePaginationData = ({last_tracks_page,
	next_tracks_page, tracks_page }) => ({
	type: feedConstants.RECEIVE_PAGINATION_DATA,
	last_tracks_page,
	next_tracks_page,
	tracks_page
});

export const receiveFeed = (feed) => ({
	type: feedConstants.RECEIVE_FEED,
	feed
});

export const receiveFeedMetadata = (feedType, metadata) => ({
	type: feedConstants.RECEIVE_FEED_METADATA,
	feedType,
	metadata
});

export const fetchFeed = (filters) => ({
	type: feedConstants.FETCH_FEED,
	filters
});

export const fetchOldFeed = (filters) => ({
	type: feedConstants.FETCH_OLD_FEED,
	filters
});

export const setPlayingFeedName = (feedName) => ({
	type: feedConstants.SET_PLAYING_FEED_NAME,
	feedName
});

export const paginateTracks = () => ({
	type: feedConstants.PAGINATE_TRACKS
});

export const setLikeFeedUserId = (userId) => ({
	type: feedConstants.SET_LIKE_FEED_USER_ID,
	userId
})

export const setFeedType = (feedType) => ({
	type: feedConstants.SET_FEED_TYPE,
	feedType
});

export const updateTrackLikeCount = (trackId, likeCount) => ({
	type: feedConstants.UPDATE_TRACK_LIKE_COUNT,
	trackId,
	likeCount
});

export const resetTracks = () => ({
	type: feedConstants.RESET_TRACKS
});


export const handleTrackClick = (trackId, clickType) => ({
	type: feedConstants.HANDLE_TRACK_CLICK,
	trackId,
	clickType
});

export const loadingStart = () => ({
	type: feedConstants.LOADING_START
});

export const loadingStop = () => ({
	type: feedConstants.LOADING_STOP
});

export const receiveTracks = (tracks) => ({
	type: feedConstants.RECEIVE_TRACKS,
	tracks
});

export const receivePlayingTracks = (tracks) => ({
	type: feedConstants.RECEIVE_PLAYING_TRACKS,
	tracks
});


export const updateFilters = (filters) => ({
	type: feedConstants.UPDATE_FILTERS,
	filters
});

export const updateTrackId = (trackId) => ({
	type: feedConstants.UPDATE_TRACK_ID,
	trackId
});

export const updateFocusedTrackId = (trackId) => ({
	type: feedConstants.UPDATE_FOCUSED_TRACK_ID,
	trackId
});

export const updatePlayingTrackId = (trackId) => ({
	type: feedConstants.UPDATE_PLAYING_TRACK_ID,
	trackId
});
