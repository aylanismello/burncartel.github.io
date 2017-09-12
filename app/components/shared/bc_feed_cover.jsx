import React from 'react';
import * as FontAwesome from 'react-icons/lib/fa/';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BCSpinner from './bc_spinner';

const iconSize = 40;

const BCFeedCover = ({ handleFeedClick, artworkUrl, extraClass, linkUrl }) => {
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
		<div className="artwork-wrapper-feed">
			<Link
				to={linkUrl}
				onClick={(e) => {
					const { tagName } = e.target;
					if (tagName === 'path' || tagName === 'svg') {
						e.preventDefault();
						console.log('GOINT TO LOAD UP NEW PLAYING FEED WITHOUT CHANGING FOCUSED FEED... WHOA!')
					}
				}}
			>
				{/* <img src={artworkUrl} className="artwork-icon" /> */}
				{/* <Image src={artworkUrl} width="200px" /> */}
				<Image src={artworkUrl} fluid />
				<div className="feed-cover-buttons-container">
					<div className="current-icon-container">
						{currentIcon}
						<BCSpinner
							extraClass="artwork-play visibility-hidden"
							name="line-scale-pulse-out-rapid"
						/>
					</div>
				</div>
			</Link>
		</div>
	);
};

const { func, string } = PropTypes;

BCFeedCover.propTypes = {
	handleFeedClick: func.isRequired,
	artworkUrl: string.isRequired,
	extraClass: string,
	linkUrl: string
};

BCFeedCover.defaultProps = {
	extraClass: '',
	linkUrl: ''
};

export default BCFeedCover;
