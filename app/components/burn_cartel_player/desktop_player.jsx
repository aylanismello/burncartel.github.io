import React from 'react';
import * as FontAwesome from 'react-icons/lib/fa/';
import FireLike from '../likes/fire_like';
import VolumeControl from '../volume_control';
import SeekControl from '../seek_control';

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

					<div className="player-buttons">
						<FontAwesome.FaRandom
							size={25}
							color={props.shuffle ? '#0275d8' : 'white'}
							className="bc-icon"
							onClick={props.toggleShuffle}
						/>

						<FontAwesome.FaStepBackward
							size={30}
							color="aliceblue"
							className="bc-icon"
							onClick={props.goToPrevTrack}
						/>

						<div onClick={props.toggle}>
							{props.playIcon}
						</div>

						<FontAwesome.FaStepForward
							size={30}
							color="aliceblue"
							className="bc-icon"
							onClick={props.goToNextTrack}
						/>

						<FontAwesome.FaRepeat
							size={25}
							color={props.repeating ? '#0275d8' : 'white'}
							className="bc-icon"
							onClick={props.toggleRepeat}
						/>

					</div>

					<SeekControl
						seekToTime={props.seekToTime}
						currentTime={props.currentTime}
						trackDuration={props.track.duration}
						secondsToMinutes={props.secondsToMinutes}
					/>
				</div>

				<div className="burn-cartel-player-control-extra">

					<VolumeControl />

				</div>
			</div>
		</div>
	);
};

export default DesktopPlayer;
