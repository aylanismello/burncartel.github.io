import React from 'react';
import { Link } from 'react-router';


const TrackItem = ({ track, handleTrackUpdate, playing, trackId }) => {
	const numCurators = track.curators.length;
	const curatorWord = (numCurators <= 1 ? 'curator' : 'curators');
	const curatorsStr = `${numCurators} ${curatorWord}`

	const artwork_url = (track.artwork_url ? track.artwork_url : track.publisher.avatar_url);

	let playIcon = 'https://cdn3.iconfinder.com/data/icons/seo-marketing-2-1/48/56-128.png';

	if(trackId === track.id && playing) {
		playIcon = 'https://cdn2.iconfinder.com/data/icons/general-22/1000/pause_button-128.png';
	}

	return (
		<div className="row">
			<div className="col-sm-6 col-md-4 track-container">
				<div className="thumbnail" >
				{/*  do NOT use image itself to set width of this, there's invisble white space on edges*/}
					<div className="artwork-wrapper" onClick={() => handleTrackUpdate(track.id)}>
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
							<Link
								to={`/tracks/${track.id}`}
							>
								<h3 className="track-title" onClick={() => handleTrackUpdate(track.id)}>{track.name}</h3>
							</Link>

							<span>Selected by {curatorsStr} </span>
							<div className="fire-emoji-container">
								<img
								className="fire-emoji"
								src="http://pix.iemoji.com/images/emoji/apple/ios-9/256/fire.png"/>
							</div>

						</div>

				</div>

			</div>
		</div>

	);
};

export default TrackItem;
