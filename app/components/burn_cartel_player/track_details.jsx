import React from 'react';
import { Link } from 'react-router-dom';

const MobileDetails = props => (
	<div className="track-details-text">
		<div className="track-top-details">

			<span className="track-name">
				{props.trackName}
			</span>

			<span className="track-artist">
				{` ${props.track.publisher.name.slice(0, 15)} `}
			</span>

		</div>
	</div>
);

const DesktopDetails = props => {
	const artworkUrl = props.track.artwork_url
		? props.track.artwork_url
		: props.track.publisher.avatar_url;

	return (
		<div className="track-details">

			<Link to={`/tracks/${props.track.id}`}>
				<div className="artwork-wrapper">
					<img src={artworkUrl} className="artwork-icon" alt="trackArt" />
				</div>
			</Link>

			<div className="track-details-text">

				<div>
					<Link to={`/tracks/${props.track.id}`}>
						<span className="track-name">
							{props.trackName}
						</span>
					</Link>
				</div>

				<div>
					<Link to={`/publishers/${props.track.publisher.id}`}>
						<span className="track-artist">
							{` ${props.track.publisher.name.slice(0, 15)} `}
						</span>
					</Link>
				</div>

			</div>
			{/* <div>
            Playing from {props.feedName.toUpperCase()} feed
          </div> */}
			{/* <div>
            {BurnCartelPlayer.secondsToMinutes(props.currentTime)}
          </div> */}
		</div>
	);
};

const TrackDetails = props => {
	let Details;

	let trackName = props.track.name;

	if (trackName.length > 17) {
		trackName = `${trackName.slice(0, 17)}...`;
	}

	const formattedProps = { ...props, trackName };

	switch (props.playerType) {
		case 'mobile':
			Details = (
				<div className="burn-cartel-player-details">
					<div className="dummy-icon">
						{props.playIcon}
					</div>
					{props.ready
						? <MobileDetails {...formattedProps} />
						: <div>
								LOADING
							</div>}
				</div>
			);
			break;
		case 'desktop':
			Details = (
				<div className="burn-cartel-player-details">
					{props.ready
						? <DesktopDetails {...formattedProps} />
						: <div>
								LOADING
							</div>}
				</div>
			);
			break;
		default:
			Details = <div />;
	}

	return Details;
};

export default TrackDetails;
