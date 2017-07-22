import React from 'react';
import * as FontAwesome from 'react-icons/lib/fa/';
import FireLike from '../likes/fire_like';
import VolumeSlider from '../volume_slider';

const DesktopPlayer = props => {
	return (
		<div className="burn-cartel-player-container desktop">
			<div className="burn-cartel-player">

				<div className="burn-cartel-player-details-container">
					{props.children}
					<FireLike
						isLoggedIn={props.isLoggedIn}
						loginFB={props.loginFB}
						likePostInProgress={props.likePostInProgress}
						likeUnlikeTrack={props.likeUnlikeTrack}
						isLikedByUser={props.isLikedByUser}
						trackId={props.trackId}
						size={30}
					/>
				</div>
				<div className="burn-cartel-player-control">

					<FontAwesome.FaStepBackward
						size={40}
						color="aliceblue"
						className="bc-icon"
						onClick={props.goToPrevTrack}
					/>

					<div onClick={props.toggle}>
						{props.playIcon}
					</div>

					<FontAwesome.FaStepForward
						size={40}
						color="aliceblue"
						className="bc-icon"
						onClick={props.goToNextTrack}
					/>

					{/* <FontAwesome.FaRepeat
						size={40}
						color={props.repeating ? '#0275d8' : 'white'}
						className="bc-icon"
					/> */}

				</div>

				<div className="burn-cartel-player-control-extra">
					<VolumeSlider
						onVolumeChange={(newValue) => {
							window.sc.audio.volume = newValue / 100;
						}}
					/>

				</div>
			</div>
		</div>
	);
};

export default DesktopPlayer;
