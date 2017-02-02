import React from 'react';
import TrackBanner from './track_banner';
import UserList from '../user/user_list';
import Loading from '../loading';

// There are two scenarios here. One is that
// a user got sent here via the internal react-router,
// which means their track is in the store.

// The second is that they refreshed or used another outside
// link or bookmark. In this case, we will have to hit the api
// and add this song somehwo to our redux store

const TrackShow = ({ id, track, updateFilters, updateTrackId }) => {
	let childElements;


	if(!track) {
		updateTrackId(id);
		updateFilters({id});
		// alert('fuck! we have to hit our endpoint again!');
		return (
			<Loading />
		);

	} else {

	// const track = tracks[id];
	// but here we have bigger problems.
	// if we try to make this a link ppl could share,
	// then we have to hit up the tracks api
	// in case we don't have the track in our redux store

		return (
			<div className="container track-show">
				<TrackBanner track={track} />
				<UserList
					track={track}
				/>
			</div>
		)
	}


};

export default TrackShow;
