export const playerConstants = {
	TOGGLE_PLAY: 'TOGGLE_PLAY',
	INIT_PLAYER: 'INIT_PLAYER',
	SET_TRACK_NOT_LOADED: 'SET_TRACK_NOT_LOADED',
	// refactor these names to match feeder loading
	SET_TRACK_LOADED: 'SET_TRACK_LOADED',
	UPDATE_CURRENT_TIME: 'UPDATE_CURRENT_TIME',
	TOGGLE_REPEAT: 'TOGGLE_REPEAT',
	TOGGLE_SHUFFLE: 'TOGGLE_SHUFFLE',
	DISABLE_SHUFFLE: 'DISABLE_SHUFFLE'
};

export const toggleRepeat = () => ({
	type: playerConstants.TOGGLE_REPEAT
});

export const toggleShuffle = () => ({
	type: playerConstants.TOGGLE_SHUFFLE
});

export const disableShuffle = () => ({
	type: playerConstants.DISABLE_SHUFFLE
});

export const togglePlay = () => ({
	type: playerConstants.TOGGLE_PLAY
});

export const initPlayer = () => ({
	type: playerConstants.INIT_PLAYER
});

export const setTrackLoaded = () => ({
	type: playerConstants.SET_TRACK_LOADED
});

export const setTrackNotLoaded = () => ({
	type: playerConstants.SET_TRACK_NOT_LOADED
});

export const updateCurrentTime = currentTime => ({
	type: playerConstants.UPDATE_CURRENT_TIME,
	currentTime
});
