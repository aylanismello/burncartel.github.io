// https://github.com/voronianski/soundcloud-audio.js
import React from 'react';
import SoundCloudAudio from 'soundcloud-audio';
import MediaQuery from 'react-responsive';
import * as FontAwesome from 'react-icons/lib/fa/';
import MobilePlayer from './mobile_player';
import DesktopPlayer from './desktop_player';
import TrackDetails from './track_details';

// BUG ONLY HAPPENS WHEN SWITCHING FE
class BurnCartelPlayer extends React.Component {
	static secondsToMinutes(seconds) {
		let timeStamp;
		const secondsLeft = Math.floor(seconds % 60);
		const minutesLeft = Math.floor(seconds / 60);

		if (secondsLeft < 10) {
			timeStamp = `${minutesLeft}:0${secondsLeft}`;
		} else {
			timeStamp = `${minutesLeft}:${secondsLeft}`;
		}

		return timeStamp;
	}

	static isPlaying(src) {
		return (
			src.currentTime > 0 && !src.paused && !src.ended && src.readyState > 2
		);
	}

	constructor(props) {
		super(props);
		this.togglePlay = this.togglePlay.bind(this);
		this.goToNextTrack = this.goToNextTrack.bind(this);
		this.goToPrevTrack = this.goToPrevTrack.bind(this);
		this.playAndLoadTrack = this.playAndLoadTrack.bind(this);
		this.pauseTrack = this.pauseTrack.bind(this);
		this.playTrack = this.playTrack.bind(this);
		this.onTrackEnd = this.onTrackEnd.bind(this);
		this.seekToTime = this.seekToTime.bind(this);
		this.scAudio = new SoundCloudAudio(props.clientId);
		this.currentTime = 0;
		window.sc = this.scAudio;
		this.track = null;
		this.playIcon = null;

		this.tapTimers = [];
		this.isDoubleTap = false;
	}

	componentWillReceiveProps(nextProps) {
		// TRACK CHANGED
		if (this.props.trackId !== nextProps.trackId) {
			if (this.props.feedName !== nextProps.feedName) {
				this.scAudio.audio.removeEventListener('ended', this.onTrackEnd, false);
			}

			this.track = nextProps.track;
			this.props.setTrackNotLoaded();
			this.pauseTrack();

			this.playAndLoadTrack();
			// TRACK PAUSE
		} else if (this.props.playing !== nextProps.playing) {
			if (!nextProps.playing) {
				this.pauseTrack();
			} else {
				this.playTrack();
			}
		}
	}

	seekToTime(newTimeInSeconds) {
		// everything gets kind of fucked here, hopefully a less
		// errror prone way of seeking replaces this...
		window.sc.audio.currentTime = newTimeInSeconds;
		this.currentTime = newTimeInSeconds;
		this.props.updateCurrentTime(this.currentTime);
	}

	playAndLoadTrack() {
		const isPlaying = BurnCartelPlayer.isPlaying(this.scAudio.audio);
		this.playTrack();

		this.currentTime = 0;

		this.scAudio.audio.addEventListener('timeupdate', () => {
			if (!this.props.trackLoaded && this.scAudio.audio.currentTime > 0) {
				this.props.setTrackLoaded();
			}

			if (this.scAudio.audio.currentTime - this.currentTime > 1) {
				this.currentTime++;

				this.props.updateCurrentTime(this.currentTime);
			}
		});

		// why is this being called twice on the same track??
		this.scAudio.audio.addEventListener('ended', this.onTrackEnd, false);
	}

	onTrackEnd() {

		this.seekToTime(0);

		if (this.props.repeating) {
			this.scAudio.audio.play();
		} else if (this.props.shuffle) {
			this.scAudio.audio.removeEventListener('ended', this.onTrackEnd, false);
			const nextTrackId = this.props.generateRandomTrackId();
			this.props.updateTrackId(nextTrackId);
		} else if (this.props.nextTrackId) {
			this.scAudio.audio.removeEventListener('ended', this.onTrackEnd, false);
			this.props.updateTrackId(this.props.nextTrackId);
		}
	}

	goToNextTrack() {
		if (this.props.nextTrackId) {
			this.props.updateTrackId(this.props.nextTrackId);
			this.seekToTime(0);
		}
	}

	goToPrevTrack() {
		if (this.props.prevTrackId) {
			this.props.updateTrackId(this.props.prevTrackId);
			this.seekToTime(0);
		}
	}

	pauseTrack() {
		this.scAudio.pause();
	}

	playTrack() {
		this.scAudio.play({ streamUrl: this.track.stream_url });

		const title = this.track.name.length > 10
			? `${this.track.name.substr(0, 10)}...`
			: this.track.name;

		document.title = `${title} | Fire Feed`;
	}

	togglePlay() {
		this.props.togglePlay();
	}

	render() {
		if (!this.props.playing) {
			this.playIcon = (
				<FontAwesome.FaPlayCircleO
					size={40}
					color="aliceblue"
					className="bc-icon"
				/>
			);
		} else {
			this.playIcon = (
				<FontAwesome.FaPauseCircleO
					size={40}
					color="aliceblue"
					className="bc-icon"
				/>
			);
		}

		let details = <div />;

		const ready = this.track && this.props.trackLoaded;

		if (this.track && this.props.trackLoaded) {
			let trackName = this.track.name;
			if (this.track.name.length > 17) {
				trackName = `${this.track.name.slice(0, 17)}...`;
			}

			details = (
				<div className="track-details-text">
					<div className="track-top-details">

						{/* <Link
		            to={`/tracks/${this.track.id}`}
		          > */}
						<span className="track-name">

							{trackName}
						</span>
						{/* </Link> */}
						•
						{/* <Link
		            to={`/publishers/${this.props.publisherId}`}
		          > */}
						<span className="track-artist">
							{` ${this.track.publisher.name.slice(0, 15)} `}
						</span>
						{/* </Link> */}

						<div>
							Playing from {this.props.feedName.toUpperCase()} feed
						</div>
					</div>
				</div>
			);
		} else if (this.track && !this.props.trackLoaded) {
			details = (
				<div>
					LOADING
				</div>
			);
		}

		if (this.props.playerInitialized) {
			const {
				isLoggedIn,
				loginFB,
				likePostInProgress,
				likeUnlikeTrack,
				numLikes,
				trackId,
				track,
				userLikes,
				toggleRepeat,
				repeating
			} = this.props;

			const isLikedByUser = userLikes[trackId] === undefined ? false : true;

			const mobileProps = {
				goToNextTrack: this.goToNextTrack,
				goToPrevTrack: this.goToPrevTrack,
				likeUnlikeTrack,
				isLoggedIn,
				likePostInProgress,
				playIcon: this.playIcon,
				track: this.track,
				details,
				toggle: this.togglePlay,
				trackId,
				isLikedByUser
			};

			const moreProps = {
				loginFB,
				repeating,
				toggleRepeat,
				currentTime: this.props.currentTime,
				seekToTime: this.seekToTime,
				secondsToMinutes: BurnCartelPlayer.secondsToMinutes,
				toggleShuffle: this.props.toggleShuffle,
				shuffle: this.props.shuffle
			};

			const desktopProps = { ...mobileProps, ...moreProps };

			return (
				<div>
					<MediaQuery query="(max-device-width: 450px)">
						<MobilePlayer {...mobileProps}>
							<TrackDetails
								playIcon={this.playIcon}
								playerType="mobile"
								ready={ready}
								track={this.track}
							/>
						</MobilePlayer>
					</MediaQuery>
					<MediaQuery query="(min-device-width: 451px)">
						<DesktopPlayer {...desktopProps}>
							<TrackDetails
								playIcon={this.playIcon}
								playerType="desktop"
								ready={ready}
								track={this.track}
							/>
						</DesktopPlayer>
					</MediaQuery>
				</div>
			);
		} else {
			return <div />;
		}
	}
}

export default BurnCartelPlayer;
