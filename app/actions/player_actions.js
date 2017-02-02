export const playerConstants = {
	TOGGLE_PLAY: 'TOGGLE_PLAY',
	INIT_PLAYER: 'INIT_PLAYER'
};

export const togglePlay = () => ({
	type: playerConstants.TOGGLE_PLAY
});

export const initPlayer = () => ({
	type: playerConstants.INIT_PLAYER
});
