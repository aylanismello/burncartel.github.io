import React from 'react';
import { Link } from 'react-router';
import TrackItem from '../track/track_item';
import Loading from '../loading';

const Feed = ({ tracks, handleTrackUpdate, loadingFeed }) => {
	let childElements;

	if(loadingFeed) {
		childElements = <Loading />;
	} else {

		childElements = tracks.map((track, idx) => (
			<TrackItem
				track={track}
				handleTrackUpdate={handleTrackUpdate}
				idx={idx}
				key={idx}
			/>
		));

	}

	return (
		<div className="feed-container">
			{childElements}
		</div>
	);
};

export default Feed;
