import React from 'react';
import { Link } from 'react-router';


const TrackItem = ({ track, handleTrackUpdate, idx }) => {
	const numCurators = track.curators.length;
	const curatorWord = (numCurators <= 1 ? 'curator' : 'curators');
	const curatorsStr = `${numCurators} ${curatorWord}`

	const artwork_url = (track.artwork_url ? track.artwork_url : track.publisher.avatar_url);

	return (
		<div className="row">
			<div className="col-sm-6 col-md-4 track-container">
				{/* <div className="thumbnail" onClick={handleTrackUpdate.bind(null, track.id)}> */}
				{/* <div className="thumbnail" onClick={() => handleTrackUpdate(idx)}> */}
				<div className="thumbnail" onClick={() => handleTrackUpdate(track.id)}>
					<div className="artwork-wrapper">
						<img
							src={artwork_url}
							className="artwork-icon"
						/>
						<img
							src='http://wptf.com/wp-content/uploads/2014/05/play-button.png'
							className="artwork-play"
						/>
						<span className="glyphicon glyphicon-play-circle"/>
					</div>

						<div className="caption">
							<Link
								to={`/tracks/${track.id}`}
							>
								<h3 className="track-title">{track.name}</h3>
							</Link>
							<span>Selected by <a href="#">{curatorsStr}</a> </span>

								<div className="fire-emoji-container">
									<img
										className="fire-emoji"
										src="http://pix.iemoji.com/images/emoji/apple/ios-9/256/fire.png"/>
								</div>
								<a href="#" className="btn btn-default" role="button">Button</a>
						</div>

				</div>
			</div>
		</div>

	);
};

export default TrackItem;
