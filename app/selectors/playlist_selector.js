import { createSelector } from 'reselect';

const getPlaylists = state => state.feed.EXPLORE;

export const getPlaylistsHash = createSelector([getPlaylists], playlists => {
	const playlistsHash = {};

	for (const playlist of playlists) {

		if(playlistsHash[playlist.playlist_type]) {
      playlistsHash[playlist.playlist_type].push(playlist);
    } else {
      playlistsHash[playlist.playlist_type] = [playlist];
    }
	}

	return playlistsHash;
});
