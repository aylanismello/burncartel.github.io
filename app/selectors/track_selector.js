import { createSelector } from 'reselect';

const getTracks = state => state.feed.tracks;

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
