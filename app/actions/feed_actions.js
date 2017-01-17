export const feedConstants = {
	FETCH_TRACKS: 'FETCH_TRACKS',
	RECEIVE_TRACKS: 'RECEIVE_TRACKS',
	UPDATE_FILTER: 'UPDATE_FILTER'
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
