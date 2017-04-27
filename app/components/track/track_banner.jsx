import React from 'react';
import { Link } from 'react-router-dom';

const TrackBanner = ({ track }) => {

	return (
		<div
			className="thumbnail track-banner"
		>
			<h2> {track.name} </h2>
			<Link to={`/publishers/${track.publisher.id}`}> <h3> by {track.publisher.name } </h3> </Link>
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
