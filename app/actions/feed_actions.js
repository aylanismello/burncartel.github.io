export const feedConstants = {
	FETCH_TRACKS: 'FETCH_TRACKS',
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
	INCREMENT_PAGE: 'INCREMENT_PAGE',
	RESET_PAGE: 'RESET_PAGE',
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
	RECEIVE_FIRE_FEED: 'RECEIVE_FIRE_FEED',
	RECEIVE_SINGLE_TRACK_FEED: 'RECEIVE_SINGLE_TRACK_FEED'
	// UPDATE_FEED: 'UPDATE_FEED'
};



export const receiveSingleTrackFeed = (feed) => ({
	type: feedConstants.RECEIVE_SINGLE_TRACK_FEED,
	feed
});

export const receiveFireFeed = (feed) => ({
	type: feedConstants.RECEIVE_FIRE_FEED,
	feed
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

export const fetchFeed = (resource, filters) => ({
	type: feedConstants.FETCH_FEED,
	resource,
	filters
});

export const setPlayingFeedName = (feedName) => ({
	type: feedConstants.SET_PLAYING_FEED_NAME,
	feedName
});

export const updatePageTitle = (trackName) => ({
	type: feedConstants.UPDATE_PAGE_TITLE,
	trackName
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

export const incrementPage = () => ({
	type: feedConstants.INCREMENT_PAGE
});

export const resetPage = () => ({
	type: feedConstants.RESET_PAGE
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

export const fetchTracks = (filters, isNewPage = false) => ({
	type: feedConstants.FETCH_TRACKS,
	filters,
	isNewPage
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
