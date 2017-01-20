import React from 'react';

const TrackBanner = ({ track }) => {

	return (

		<div className="thumbnail track-banner">
			<h2> {track.name} - {track.publisher.name}</h2>
			<img src={track.artwork_url} />
		</div>

	);
};



export default TrackBanner;
