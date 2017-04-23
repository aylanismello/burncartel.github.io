import { createSelector } from 'reselect';

const getUserTracks = state => state.user.currentUser.tracks
const getTracks = state => state.feed.focusedFeed.tracks;
const getPlayingTracks = state => state.feed.playingFeed.tracks;
const getCurrentTrackId = state => state.feed.focusedFeed.trackId;
const getCurrentPlayingTrackId = state => state.feed.playingFeed.trackId;


export const getPlayingFeedTracksHash = createSelector(
		[getPlayingTracks],
		(tracks) => {
			let tracksObject = {};

			for(const track of tracks) {
				tracksObject[track.id] = track;
			}
			return tracksObject;
		}
);

export const getFeedTracksHash = createSelector(
		[getTracks],
		(tracks) => {
			let tracksObject = {};

			for(const track of tracks) {
				tracksObject[track.id] = track;
			}
			return tracksObject;
		}
);

export const getUserTracksHash = createSelector(
	[getUserTracks],
	(tracks) => {
		let tracksObject = {};

		for(const track of tracks) {
			tracksObject[track.id] = track;
		}
		return tracksObject;
	}
)

export const getNextTrackId = createSelector(
	[getPlayingTracks, getCurrentPlayingTrackId],
	(tracks, trackId) => {
		let trackIdx = 0;
		for(const track of tracks) {
			if(track.id === trackId) {
				if ((trackIdx + 1) >= tracks.length) {
					console.log('we have reached end of feed. paginate.');
				} else {
					return (tracks[trackIdx + 1].id);
				}
			}
			trackIdx++;
		}
	}
);
