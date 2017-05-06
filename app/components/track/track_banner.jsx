import React from 'react';
import { Link } from 'react-router-dom';

const TrackBanner = ({ track, playingTrackId, playing,
	 trackLoaded, handleTrackClick }) => {

	const playIconUrl = 'https://cdn3.iconfinder.com/data/icons/seo-marketing-2-1/48/56-128.png';
	const pauseIconUrl = 'https://cdn1.iconfinder.com/data/icons/media-volume-1/48/017-512.png';
	const loadingIconUrl = 'https://cdn1.iconfinder.com/data/icons/loading-wait-time/256/loading_wait_time_02-128.png';

	let playIcon = playIconUrl;

	if(playingTrackId === track.id) {
		if(trackLoaded && playing) {
			playIcon = pauseIconUrl;
		} else if(trackLoaded && !playing) {
			playIcon = playIconUrl;
		} else {
			playIcon = loadingIconUrl;
		}
	}


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

			<div className="artwork-wrapper" onClick={() => handleTrackClick(track.id, 'play')}>
				<img
					src={track.artwork_url}
					className="artwork-icon"
				/>
				<img
					src={playIcon}
					className="artwork-play"
				/>
				<span className="glyphicon glyphicon-play-circle"/>
			</div>
			
			{/* <img src={track.artwork_url} /> */}
		</div>

	);
};



export default TrackBanner;
