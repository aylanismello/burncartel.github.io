import React from 'react';
import * as FontAwesome from 'react-icons/lib/fa/';
import BCSpinner from './bc_spinner';

const iconSize = 40;

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
	const artworkUrl = track.artwork_url ? track.artwork_url : track.publisher.avatar_url;

	let showLoading = false;

	const playIcon = (
		<FontAwesome.FaPlay
			size={iconSize}
			color="white"
			className="artwork-play cursor-pointer-grow"
			onClick={handleTrackClick}
		/>
	);

	const pauseIcon = (
		<FontAwesome.FaPause
			size={iconSize}
			color="white"
			className="artwork-play cursor-pointer-grow"
			onClick={handleTrackClick}
		/>
	);

	let currentIcon = playIcon;

	if (playingTrackId === trackId) {
		if (trackLoaded && playing) {
			showLoading = false;
			currentIcon = pauseIcon;
		} else if (trackLoaded && !playing) {
			showLoading = false;
			currentIcon = playIcon;
		} else {
			currentIcon = null;
			showLoading = true;
		}
	}

	const extraClass = showLoading ? 'artwork-play' : 'artwork-play visibility-hidden';

	return (
		<div className="artwork-wrapper">
			{hasRanking
				? <span className="ranking-header">
					{trackIdx + 1}
				</span>
				: null}

			<img src={artworkUrl} className="artwork-icon" />

			<div className="current-icon-container">
				{currentIcon}
				<BCSpinner extraClass={extraClass} name="line-scale-pulse-out-rapid" />
			</div>
		</div>
	);
};

BCAlbumArt.defaultProps = {
	hasRanking: false,
	trackIdx: 0
};

export default BCAlbumArt;
