import { createSelector } from 'reselect';

const getTracks = state => state.feed.tracksArr;

export const getTracksHash =  createSelector(
		[getTracks],
		(tracks) => {
			// console.log(id);
			let tracksObject = {};

			for(const track of tracks) {
				tracksObject[track.id] = track;
				// return track;
			}
			return tracksObject;
		}
	);

// instead we traverse all tracks search for trackId!!




// this means I have to write a custom sort function
// for already ordered data fromt the API.

// there should be another way...
// export const get
