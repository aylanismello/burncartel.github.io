import React from 'react';
import { GoFlame } from 'react-icons/lib/go';

const FireLike = ({
	isLoggedIn,
	likePostInProgress,
	likeUnlikeTrack,
	numLikes,
	loginFB,
	isLikedByUser,
	trackId,
	size = 50
}) => {
	// SIZE does not work, it does nothing.
	// this must be changed in css

	let likesDisplay = numLikes;

	if (numLikes === 0) {
		likesDisplay = '0';
	} else if (numLikes === undefined) {
		likesDisplay = null;
	}

	let flameColor;

	if (isLikedByUser) {
		flameColor = 'orange';
	} else {
		flameColor = 'black';
	}

	return (
		<div
			className="like-icon-container"
			onClick={() => {
				if (!isLoggedIn) {
					loginFB();
					// on success callback, like or unlike song

					// on successful login, like track!
					// ah but state will change, this will rerender
					// and other condition here's code will probs run
				} else if (likePostInProgress) {
					// assuming track has not already been liked
					console.log('wait for other like create/detroy action to finish!');
				} else {
					likeUnlikeTrack(trackId);
				}
			}}
		>
			<GoFlame size={size} color={flameColor} className="like-icon" />
			<div className="likes-display">
				{likesDisplay}
			</div>

		</div>
	);
};

export default FireLike;
