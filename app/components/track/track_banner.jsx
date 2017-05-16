import React from 'react';
import { Link } from 'react-router-dom';

const TrackBanner = ({ track, playingTrackId, playing,
	 trackLoaded, handleTrackClick, children }) => {

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

	const trackImageUrl = track.artwork_url ? track.artwork_url : track.publisher.avatar_url

	return (
		<div
			className="thumbnail track-banner"
		>
			<h2> {track.name} </h2>
			<Link to={`/publishers/${track.publisher.id}`}> <h3> by {track.publisher.name } </h3> </Link>


			<div className="artwork-wrapper">
				<img
					src={trackImageUrl}
					className="artwork-icon"
				/>
				<img
					onClick={() => handleTrackClick(track.id, 'play')}
					src={playIcon}
					className="artwork-play"
				/>
				<span className="glyphicon glyphicon-play-circle"/>
			</div>
			
			<div className="track-banner-icons-container">
				<div className="track-item-icon">
					<a href={track.permalink_url} target="_blank">
						<img
							className="soundcloud-png"
							src="https://developers.soundcloud.com/assets/logo_big_black-4fbe88aa0bf28767bbfc65a08c828c76.png"/>
					</a>
				</div>

				{children}
			</div>

		</div>

	);
};



export default TrackBanner;
