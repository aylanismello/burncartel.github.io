import { createSelector } from 'reselect';

const getTracks = state => state.feed.focusedFeed.tracks;
const getCuratorId = state => state.feed.filters.curator;

export const getCuratorFromTracks = createSelector(
	[getTracks, getCuratorId],
	(tracks, userId) => {
		const keys = Object.keys(tracks);

		for(const track of keys) {
			for(const curator of tracks[track].curators) {
				if(`${curator.id}` === `${userId}`) {
					return curator;
				}
			}
		}

		// throw `USER ${userId} not found :(`
	}
);
