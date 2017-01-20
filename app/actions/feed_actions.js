export const feedConstants = {
	FETCH_TRACKS: 'FETCH_TRACKS',
	RECEIVE_TRACKS: 'RECEIVE_TRACKS',
	UPDATE_FILTER: 'UPDATE_FILTER',
	UPDATE_TRACK_IDX: 'UPDATE_TRACK_IDX',
	UPDATE_TRACK_ID: 'UPDATE_TRACK_ID',
	UPDATE_USER_ID: 'UPDATE_USER_ID'
};

export const receiveTracks = (tracks) => ({
	type: feedConstants.RECEIVE_TRACKS,
	tracks
});

export const fetchTracks = () => ({
	type: feedConstants.FETCH_TRACKS
});

export const updateFilter = (filter) => ({
	type: feedConstants.UPDATE_FILTER,
	filter
});

export const updateTrackIdx = (trackIdx) => ({
	type: feedConstants.UPDATE_TRACK_IDX,
	trackIdx
});

export const updateTrackId = (trackId) => ({
	type: feedConstants.UPDATE_TRACK_ID,
	trackId
});

export const updateUserId = (userId) => ({
	type: feedConstants.UPDATE_USER_ID,
	userId
});
