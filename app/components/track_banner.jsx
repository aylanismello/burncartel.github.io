import React from 'react';

const TrackBanner = ({ track }) => {
	return (

		<div className="thumbnail">
			<h2> {track.name} - {track.publisher.name}</h2>

		</div>

	);
};

export default TrackBanner;
