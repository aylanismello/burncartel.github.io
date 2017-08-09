import { createSelector } from 'reselect';

const getUserTracks = state => state.user.currentUser.sorted_serialized_tracks;
const getTracks = state => state.feed.focusedFeed.tracks;
const getPlayingTracks = state => state.feed.playingFeed.tracks;
const getPlayingTracksShuffled = state => state.feed.playingFeedShuffled.tracks;
const getCurrentPlayingTrackId = state => state.feed.playingFeed.trackId;

// learn to refactor this later, i'm tired of this rn
// export const getPlayingFeedTracksHash = ({ options = { shuffled: false } }) => {
// 	const getTheTracks = (options.shuffled ? getPlayingTracksShuffled : getPlayingTracks);
//
//
// 	const finalTracks = createSelector([getTheTracks], tracks => {
// 		let tracksObject = {};
//
// 		for (const track of tracks) {
// 			tracksObject[track.id] = track;
// 		}
// 		return tracksObject;
// 	});
//
// 	debugger;
// };

export const getPlayingFeedTracksHash = createSelector(
	[getPlayingTracks],
	tracks => {
		let tracksObject = {};

		for (const track of tracks) {
			tracksObject[track.id] = track;
		}
		return tracksObject;
	}
);

export const getPlayingFeedTracksHashShuffled = createSelector(
	[getPlayingTracksShuffled],
	tracks => {
		let tracksObject = {};

		for (const track of tracks) {
			tracksObject[track.id] = track;
		}
		return tracksObject;
	}
);

export const getFeedTracksHash = createSelector([getTracks], tracks => {
	let tracksObject = {};

	for (const track of tracks) {
		tracksObject[track.id] = track;
	}
	return tracksObject;
});

export const getUserTracksHash = createSelector([getUserTracks], tracks => {
	let tracksObject = {};

	for (const track of tracks) {
		tracksObject[track.id] = track;
	}
	return tracksObject;
});

export const getNextTrackId = createSelector(
	[getPlayingTracks, getCurrentPlayingTrackId],
	(tracks, trackId) => {
		let trackIdx = 0;
		for (const track of tracks) {
			if (track.id === trackId) {
				if (trackIdx + 1 >= tracks.length) {
					console.log('no more tracks in getNextTrackId / track_selector.js.');
				} else {
					return tracks[trackIdx + 1].id;
				}
			}
			trackIdx++;
		}
	}
);

export const getNextTrackIdShuffled = createSelector(
	[getPlayingTracksShuffled, getCurrentPlayingTrackId],
	(tracks, trackId) => {
		let trackIdx = 0;
		for (const track of tracks) {
			if (track.id === trackId) {
				if (trackIdx + 1 >= tracks.length) {
					console.log('no more tracks in getNextTrackId / track_selector.js.');
				} else {
					return tracks[trackIdx + 1].id;
				}
			}
			trackIdx++;
		}
	}
);

export const getPrevTrackId = createSelector(
	[getPlayingTracks, getCurrentPlayingTrackId],
	(tracks, trackId) => {
		let trackIdx = 0;
		for (const track of tracks) {
			if (track.id === trackId) {
				if (trackIdx === 0) {
					console.log('there is no track before the fisrt one');
				} else {
					return tracks[trackIdx - 1].id;
				}
			}
			trackIdx++;
		}
	}
);

export const getPrevTrackIdShuffled = createSelector(
	[getPlayingTracksShuffled, getCurrentPlayingTrackId],
	(tracks, trackId) => {
		let trackIdx = 0;
		for (const track of tracks) {
			if (track.id === trackId) {
				if (trackIdx === 0) {
					console.log('there is no track before the fisrt one');
				} else {
					return tracks[trackIdx - 1].id;
				}
			}
			trackIdx++;
		}
	}
);
