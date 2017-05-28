import React from 'react';

const tapTimers = [];
let isDoubleTap = false;

const MobilePlayer = (props) => {
  let playerColor = '';
  if (props.isLikedByUser) {
    playerColor = '#ff9000';
  }

  const tapInterval = 450;
  const tapIntervalDelta = 50;

	return (
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

				this.tapTimers.push(
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
					props.likeUnlikeTrack(trackId);
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
				<div className="dummy-icon">
					{props.playIcon}
				</div>
				{props.details}
			</div>

		</Hammer>
	);
};

export default MobilePlayer;
