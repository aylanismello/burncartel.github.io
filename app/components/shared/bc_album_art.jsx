import React from 'react';

const BCAlbumArt = ({
	hasRanking,
	trackIdx,
	handleTrackClick,
	trackId,
	playingTrackId,
	playing,
	trackLoaded,
	track
}) => {
	const artworkUrl = track.artwork_url
		? track.artwork_url
		: track.publisher.avatar_url;

	const playIconUrl =
		'https://cdn3.iconfinder.com/data/icons/seo-marketing-2-1/48/56-128.png';
	const pauseIconUrl =
		'https://cdn1.iconfinder.com/data/icons/media-volume-1/48/017-512.png';
	const loadingIconUrl =
		'https://cdn1.iconfinder.com/data/icons/loading-wait-time/256/loading_wait_time_02-128.png';
	let playIcon = playIconUrl;

	if (playingTrackId === trackId) {
		if (trackLoaded && playing) {
			playIcon = pauseIconUrl;
		} else if (trackLoaded && !playing) {
			playIcon = playIconUrl;
		} else {
			playIcon = loadingIconUrl;
		}
	}

	return (
		<div className="artwork-wrapper">
			{hasRanking
				? <h2>
						<span className="ranking-header">
							{trackIdx + 1}
						</span>
					</h2>
				: null}

			<img src={artworkUrl} className="artwork-icon" />
			<img onClick={handleTrackClick} src={playIcon} className="artwork-play" />
		</div>
	);
};

BCAlbumArt.defaultProps = {
	hasRanking: false,
	trackIdx: 0
};

export default BCAlbumArt;
