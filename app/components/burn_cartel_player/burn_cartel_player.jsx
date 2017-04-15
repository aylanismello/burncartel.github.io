// https://github.com/voronianski/soundcloud-audio.js
import React from 'react';
import { Link } from 'react-router-dom';
import * as FontAwesome from 'react-icons/lib/fa/';
import SoundCloudAudio from 'soundcloud-audio';

class BurnCartelPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
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
      this.props.updateTrackId(this.props.nextTrackId);
      // maybe here we send a post request to increment play count of
      // this track and add to user's history
    });
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


    // repeat changed
    // if (this.props.repeating !== nextProps.repeating) {
    //   if(nextProps.repeating) {
    //     this.scAudio.on('ended', () => {
    //       this.scAudio.audio.currentTime = 0;
    //     });
    //   } else {
    //     this.scAudio.on('ended', () => {
    //       this.props.updateTrackId(this.props.nextTrackId);
    //     });
    //   }
    //
    // }

  }

  toggle() {
    this.props.togglePlay();
  }

  render() {
    if(!this.props.playing) {
      this.playIcon = (
          <FontAwesome.FaPlayCircleO
          size={50}
          color='aliceblue'
          className='bc-icon'
        />
      );
    } else {
      this.playIcon = (
        <FontAwesome.FaPauseCircleO
          size={50}
          color='aliceblue'
          className='bc-icon'
        />
      )
    }

    let details = <div></div>;

    if(this.track && this.props.trackLoaded) {
        details = (
          <div>
            <div>
              <Link
                to={`/tracks/${this.track.id}`}
              >
                {/* {this.track.name} */}
                <h3 className="track-title" onClick={() => handleTrackClick(this.track.id)}>{this.track.name}</h3>
              </Link>
            </div>
            <div>
              by {this.track.publisher.name}
            </div>
            <div>
              {this.secondsToMinutes(this.props.currentTime)}
            </div>
          </div>
      );
    } else if(this.track && !this.props.trackLoaded) {
      details = (
        <div>
          LOADING
        </div>
      )
    }

    return (
      <div className="burn-cartel-player-container">

        <div className='burn-cartel-player-details'>
          {details}
        </div>

        <div className='burn-cartel-player-control'>

          <FontAwesome.FaStepBackward
            size={50}
            color='aliceblue'
            className='bc-icon'/>
          <div onClick={this.toggle}> {this.playIcon} </div>

          <FontAwesome.FaStepForward
            size={50}
            color='aliceblue'
            className='bc-icon'/>

          <div onClick={this.props.toggleRepeat}>
            <FontAwesome.FaRepeat
               size={50}
               color={this.props.repeating? 'green' : 'red'}
              className='bc-icon'/>
          </div>

        </div>
      </div>
		);
  }
}

export default BurnCartelPlayer;
