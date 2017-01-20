import React from 'react';

const TrackBanner = ({ track }) => {

	const styles = {
		background: 'black'
	};

	return (

		<div className="thumbnail track-banner" styles={styles}>
			<h2> {track.name} - {track.publisher.name}</h2>
			<img src={track.artwork_url} />
		</div>

	);
};



export default TrackBanner;
