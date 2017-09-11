import React from 'react';
import * as FontAwesome from 'react-icons/lib/fa/';
import PropTypes from 'prop-types';
import BCSpinner from './bc_spinner';

const iconSize = 40;

const BCFeedCover = ({ handleFeedClick, artworkUrl, extraClass }) => {
	const playIcon = (
		<FontAwesome.FaPlay
			size={iconSize}
			color="white"
			className="artwork-play cursor-pointer-grow"
			onClick={handleFeedClick}
		/>
	);

	// const pauseIcon = (
	// 	<FontAwesome.FaPause
	// 		size={iconSize}
	// 		color="white"
	// 		className="artwork-play cursor-pointer-grow"
	// 		onClick={handleFeedClick}
	// 	/>
	// );

	const currentIcon = playIcon;

	return (
		<div className="artwork-wrapper">
			<img src={artworkUrl} className="artwork-icon" />

			<div className="current-icon-container">
				{currentIcon}
				<BCSpinner extraClass="artwork-play visibility-hidden" name="line-scale-pulse-out-rapid" />
			</div>
		</div>
	);
};

const { func, string } = PropTypes;

BCFeedCover.propTypes = {
	handleFeedClick: func.isRequired,
	artworkUrl: string.isRequired,
	extraClass: string
};

BCFeedCover.defaultProps = {
	extraClass: ''
};

export default BCFeedCover;
