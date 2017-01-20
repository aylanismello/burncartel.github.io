import { createSelector } from 'reselect';

const getTracks = state => state.feed.tracks;
const getUserId = state => state.feed.userId;

export const getUserFromTracks = createSelector(
	[getTracks, getUserId],
	(tracks, userId) => {
		const keys = Object.keys(tracks);

		for(const track of keys) {
			for(const curator of tracks[track].curators) {
				if(`${curator.id}` === `${userId}`) {
					return curator;
				}
			}
		}

		throw `USER ${userId} not found :(`
	}
);
