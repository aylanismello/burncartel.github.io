import React from 'react';
import { Link } from 'react-router';


const TrackItem = ({ track, handleTrackClick, playing, trackId, trackLoaded, trackIdx }) => {
	const numCurators = track.curators.length;
	const curatorWord = (numCurators <= 1 ? 'curator' : 'curators');
	const curatorsStr = `${numCurators} ${curatorWord}`

	const artwork_url = (track.artwork_url ? track.artwork_url : track.publisher.avatar_url);

	let playIcon = 'https://cdn3.iconfinder.com/data/icons/seo-marketing-2-1/48/56-128.png';

	if(trackId === track.id) {
		if(trackLoaded && playing) {
			playIcon = 'https://cdn2.iconfinder.com/data/icons/general-22/1000/pause_button-128.png';
		} else {
			playIcon = 'https://cdn1.iconfinder.com/data/icons/loading-wait-time/256/loading_wait_time_02-128.png';
		}
	}

	debugger;
	return (
		<div className="row">
			<div className="col-sm-6 col-md-4 track-container">
				<div className="thumbnail" >
				{/*  do NOT use image itself to set width of this, there's invisble white space on edges*/}
					<div className="artwork-wrapper" onClick={() => handleTrackClick(track.id)}>
						<img
							src={artwork_url}
							className="artwork-icon"
						/>
						<img
							src={playIcon}
							className="artwork-play"
						/>
						<span className="glyphicon glyphicon-play-circle"/>
					</div>

						<div className="caption">
							<h2>{trackIdx + 1}</h2>
							<Link
								to={`/tracks/${track.id}`}
							>
								<h3 className="track-title" onClick={() => handleTrackClick(track.id)}>{track.name}</h3>
							</Link>

							<span>Selected by {curatorsStr} </span>

							<div className="track-item-icons">
								<div onClick={() => alert('u have decreed this sick af')} className="track-item-icon-container">
									<img
									className="track-item-icon"
									src="http://pix.iemoji.com/images/emoji/apple/ios-9/256/fire.png"/>
								</div>

								<div className="track-item-icon">
									<a href={track.permalink_url} target="_blank">
										<img
											className="soundcloud-png"
											src="https://developers.soundcloud.com/assets/logo_big_black-4fbe88aa0bf28767bbfc65a08c828c76.png"/>
									</a>
								</div>
						</div>

						</div>

				</div>

			</div>
		</div>

	);
};

export default TrackItem;
