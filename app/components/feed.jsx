import React from 'react';
import { Link } from 'react-router';
import TrackItem from './track_item';

const Feed = ({ tracks, handleTrackUpdate }) => {
	let childElements;

	if(tracks.length === 0) {
		childElements = (
			<div>
				<h1>
					LOADING
				</h1>
			</div>
		);
	} else {

		childElements = tracks.map((track, idx) => (
			<TrackItem
				track={track}
				handleTrackUpdate={handleTrackUpdate}
				idx={idx}
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
