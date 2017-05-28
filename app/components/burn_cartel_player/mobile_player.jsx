import React from 'react';
import Hammer from 'react-hammerjs';

const tapTimers = [];
let isDoubleTap = false;

const MobilePlayer = props => {
	let playerColor = '';
	if (props.isLikedByUser) {
		playerColor = '#ff9000';
	}

	const tapInterval = 450;
	const tapIntervalDelta = 50;

	return (
		<div
			className="burn-cartel-player-container mobile"
			style={{ background: playerColor }}
		>
			<div className="burn-cartel-player">
				<Hammer
					options={{
						recognizers: {
							swipe: {
								threshold: 1
							},
							tap: {
								taps: 1,
								interval: tapInterval
							}
						}
					}}
					onTap={e => {
						e.preventDefault();
						const idx = tapTimers.length;

						tapTimers.push(
							setTimeout(() => {
								if (!isDoubleTap) {
									window.location = `#/tracks/${props.track.id}`;
								} else {
									if (idx !== 0) clearTimeout(tapTimers[idx + 1]);
									isDoubleTap = false;
								}
							}, tapInterval + tapIntervalDelta)
						);
					}}
					onDoubleTap={e => {
						e.preventDefault();
						isDoubleTap = true;
						if (!props.isLoggedIn) {
							// loginFB();
						} else if (props.likePostInProgress) {
							// assuming track has not already been liked
							// console.log('wait for other like create/detroy action to finish!');
						} else {
							props.likeUnlikeTrack(props.trackId);
						}
					}}
					onSwipe={e => {
						if (e.direction === 2) {
							props.goToNextTrack();
						} else if (e.direction == 4) {
							props.goToPrevTrack();
						}
					}}
				>

					<div className="burn-cartel-player-details">
						{/* THIS IS HERE AND INVISIBLE BECAUSE I SUCK AT SASS */}
						<div className="dummy-icon">
							{props.playIcon}
						</div>
						{props.details}
					</div>

				</Hammer>
				<div className="burn-cartel-player-control">
					<div onClick={props.toggle}>
						{props.playIcon}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobilePlayer;
