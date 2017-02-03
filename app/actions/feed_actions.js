export const feedConstants = {
	FETCH_TRACKS: 'FETCH_TRACKS',
	RECEIVE_TRACKS: 'RECEIVE_TRACKS',
	UPDATE_FILTERS: 'UPDATE_FILTERS',
	UPDATE_TRACK_IDX: 'UPDATE_TRACK_IDX',
	UPDATE_TRACK_ID: 'UPDATE_TRACK_ID',
	LOADING_START: 'LOADING_START',
	LOADING_STOP: 'LOADING_STOP',
	HANDLE_TRACK_CLICK: 'HANDLE_TRACK_CLICK'
};


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

export const fetchTracks = (filters) => ({
	type: feedConstants.FETCH_TRACKS,
	filters
});

export const updateFilters = (filters) => ({
	type: feedConstants.UPDATE_FILTERS,
	filters
});

export const updateTrackId = (trackId) => ({
	type: feedConstants.UPDATE_TRACK_ID,
	trackId
});
