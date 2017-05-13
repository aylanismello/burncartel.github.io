// https://github.com/voronianski/soundcloud-audio.js
import React from 'react';
import { Link } from 'react-router-dom';
import SoundCloudAudio from 'soundcloud-audio';
import * as FontAwesome from 'react-icons/lib/fa/';
import FireLike from '../likes/fire_like';


class BurnCartelPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.goToNextTrack = this.goToNextTrack.bind(this);
    this.playAndLoadTrack = this.playAndLoadTrack.bind(this);
    this.pauseTrack = this.pauseTrack.bind(this);
    this.playTrack = this.playTrack.bind(this);
    this.scAudio = new SoundCloudAudio(props.clientId);
    window.sc = this.scAudio;
    this.secondsToMinutes = this.secondsToMinutes.bind(this);
    this.track = null;
    this.playIcon = null;
  }

  secondsToMinutes(seconds) {
    let timeStamp;
    const secondsLeft = seconds % 60;
    const minutesLeft = Math.floor(seconds / 60)

    if((secondsLeft) < 10) {
      timeStamp = `${minutesLeft}:0${secondsLeft}`
    } else {
      timeStamp = `${minutesLeft}:${secondsLeft}`
    }

    return timeStamp;
  }

  playAndLoadTrack() {
    this.playTrack();

    let currentTime = 0;

    this.scAudio.on('timeupdate', () => {

      if(!this.props.trackLoaded && this.scAudio.audio.currentTime > 0) {
        this.props.setTrackLoaded();
      }

      if(this.scAudio.audio.currentTime - currentTime > 1) {
        currentTime++;
        this.props.updateCurrentTime(currentTime);
      }
      // what constitutes a play?
      // how many seconds in?
    });

    this.scAudio.on('ended', () => {
      if(this.props.nextTrackId) {
        this.props.updateTrackId(this.props.nextTrackId);
      } else {
        console.log('out of tracks.. must paginate!');
      }
      // maybe here we send a post request to increment play count of
      // this track and add to user's history
    });
  }

  goToNextTrack() {
    if(this.props.nextTrackId) {
      this.props.updateTrackId(this.props.nextTrackId);
    } else {
      console.log('out of tracks.. must paginate!');
    }
  }

  pauseTrack() {
    this.scAudio.pause();
  }

  playTrack() {
    this.scAudio.play({streamUrl: this.track.stream_url});
  }

  componentWillReceiveProps(nextProps) {
    // TRACK CHANGED
    if (this.props.trackId !== nextProps.trackId) {
      this.track = nextProps.track;
      this.props.setTrackNotLoaded();
      this.playAndLoadTrack();
    } else if (this.props.playing !== nextProps.playing) {
      if(!nextProps.playing) {
        this.pauseTrack();
      } else {
        this.playTrack();
      }
    }
  }

  toggle() {
    this.props.togglePlay();
  }

  render() {
    if(!this.props.playing) {
      this.playIcon = (
          <FontAwesome.FaPlayCircleO
          size={40}
          color='aliceblue'
          className='bc-icon'
        />
      );
    } else {
      this.playIcon = (
        <FontAwesome.FaPauseCircleO
          size={40}
          color='aliceblue'
          className='bc-icon'
        />
      )
    }

    let details = <div></div>;

    if(this.track && this.props.trackLoaded) {
        details = (
          <div className='track-details-text'>
            <div className='track-top-details'>
              <Link
                to={`/tracks/${this.track.id}`}
                onClick={() => handleTrackClick(this.track.id)}
              >
                {/* {`${this.track.name} `} */}
              </Link>
                •
              <Link
                to={`/publishers/${this.props.publisherId}`}
              >
                {` ${this.track.publisher.name}`}
              </Link>
            </div>
            <div>
              Playing from {this.props.feedName.toUpperCase()} feed
            </div>
            {/* <div>
              {this.secondsToMinutes(this.props.currentTime)}
            </div> */}
          </div>
      );
    } else if(this.track && !this.props.trackLoaded) {
      details = (
        <div>
          LOADING
        </div>
      )
    }


    if(this.props.playerInitialized) {
      const { isLoggedIn, loginFB, likePostInProgress,
        likeUnlikeTrack, numLikes, trackId, track, userLikes } = this.props;

      return (
        <div className="burn-cartel-player-container">

          <div className='burn-cartel-player-details'>
            {details}
          </div>

          <div className='burn-cartel-player-control'>

            <FireLike
              isLoggedIn={isLoggedIn}
              loginFB={loginFB}
              likePostInProgress={likePostInProgress}
              likeUnlikeTrack={likeUnlikeTrack}
              isLikedByUser={userLikes[trackId] === undefined ? false : true }
              trackId={trackId}
              size={30}
            />


            {/* <FontAwesome.FaStepBackward
              size={40}
              color='aliceblue'
              className='bc-icon'/> */}

              <div
                onClick={this.toggle}>
                {this.playIcon}
              </div>

              <FontAwesome.FaStepForward
                size={40}
                color='aliceblue'
                className='bc-icon'
                onClick={this.goToNextTrack}
              />

                {/* <div onClick={this.props.toggleRepeat}>
                  <FontAwesome.FaRepeat
                  size={40}
                  color={this.props.repeating? 'green' : 'red'}
                  className='bc-icon'/>
                </div> */}

              </div>
            </div>

          );
    } else {
      return <div></div>
    }
  }
}

export default BurnCartelPlayer;
