import { createSelector } from 'reselect';

const getTracks = state => state.feed.tracks;
const getUserId = state => state.feed.userId

export const getUserFromTracks = createSelector(
	[getTracks, getUserId],
	(tracks, userId) => {
		const keys = Object.keys(getTracks);
		let user;
		keys.forEach((track) => {
			tracks[track].curators.forEach((curator) => {
				console.log(`${curator.id} === ${userId}`);
				if(`${curator.id}` === `${userId}`) {
					user = curator;
				}
			});
		});
		return user;
	}
);
