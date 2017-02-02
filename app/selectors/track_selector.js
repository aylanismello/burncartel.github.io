import { createSelector } from 'reselect';

const getTracks = state => state.feed.tracks;
const getCurrentTrackId = state => state.feed.trackId;

export const getTracksHash = createSelector(
		[getTracks],
		(tracks) => {
			let tracksObject = {};

			for(const track of tracks) {
				tracksObject[track.id] = track;
			}
			return tracksObject;
		}
);

export const getNextTrackId = createSelector(
	[getTracks, getCurrentTrackId],
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
