import React from 'react';

const style = {
	border: '5px solid black'
};

const TrackBanner = ({ track }) => {

	return (

		<div
			className="thumbnail track-banner"
			style={style}
		>
			<h2> {track.name} - {track.publisher.name}</h2>
			<img src={track.artwork_url} />
		</div>

	);
};



export default TrackBanner;
