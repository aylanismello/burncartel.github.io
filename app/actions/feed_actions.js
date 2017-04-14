export const feedConstants = {
	FETCH_TRACKS: 'FETCH_TRACKS',
	RECEIVE_TRACKS: 'RECEIVE_TRACKS',
	RESET_TRACKS: 'RESET_TRACKS',
	UPDATE_FILTERS: 'UPDATE_FILTERS',
	UPDATE_TRACK_IDX: 'UPDATE_TRACK_IDX',
	UPDATE_TRACK_ID: 'UPDATE_TRACK_ID',
	LOADING_START: 'LOADING_START',
	LOADING_STOP: 'LOADING_STOP',
	HANDLE_TRACK_CLICK: 'HANDLE_TRACK_CLICK',
	INCREMENT_PAGE: 'INCREMENT_PAGE',
	RESET_PAGE: 'RESET_PAGE',
	UPDATE_TRACK_LIKE_COUNT: 'UPDATE_TRACK_LIKE_COUNT'
};

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

export const handleTrackClick = (trackId) => ({
	type: feedConstants.HANDLE_TRACK_CLICK,
	trackId
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
