import React from 'react';
import * as FontAwesome from 'react-icons/lib/fa/';
import BCSpinner from './bc_spinner';

const playIconUrl =
	'https://cdn3.iconfinder.com/data/icons/seo-marketing-2-1/48/56-128.png';
const pauseIconUrl =
	'https://cdn1.iconfinder.com/data/icons/media-volume-1/48/017-512.png';

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

	let showLoading = false;

	let currentIcon = (
		<img
			onClick={handleTrackClick}
			src={playIconUrl}
			className="artwork-play cursor-pointer-grow"
		/>
	);

	if (playingTrackId === trackId) {
		if (trackLoaded && playing) {
			showLoading = false;
			currentIcon = (
				<img
					onClick={handleTrackClick}
					src={pauseIconUrl}
					className="artwork-play cursor-pointer-grow"
				/>
			);
		} else if (trackLoaded && !playing) {
			showLoading = false;
			currentIcon = (
				<img
					onClick={handleTrackClick}
					src={playIconUrl}
					className="artwork-play cursor-pointer-grow"
				/>
			);
		} else {
			// currentIcon = <BCSpinner extraClass="artwork-play" />;
			currentIcon = null;
			showLoading = true;
		}
	}

	// const extraClass = showLoading ? 'artwork-play' : 'artwork-play display-none';
	const extraClass = showLoading ? 'artwork-play' : 'artwork-play display-none';
	// const extraClass = 'artwork-play';

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
			{currentIcon}
			<BCSpinner extraClass={extraClass} />
			{/* <img onClick={handleTrackClick} src={playIconUrl} className="artwork-play" /> */}
		</div>
	);
};

BCAlbumArt.defaultProps = {
	hasRanking: false,
	trackIdx: 0
};

export default BCAlbumArt;
