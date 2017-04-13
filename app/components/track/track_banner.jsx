import React from 'react';

const TrackBanner = ({ track }) => {

	return (

		<div
			className="thumbnail track-banner"
		>
			<h2> {track.name} - {track.publisher.name}</h2>
			<div className="track-item-icon">
				<a href={track.permalink_url} target="_blank">
					<img
						className="soundcloud-png"
						src="https://developers.soundcloud.com/assets/logo_big_black-4fbe88aa0bf28767bbfc65a08c828c76.png"/>
				</a>
			</div>
			<img src={track.artwork_url} />
		</div>

	);
};



export default TrackBanner;
