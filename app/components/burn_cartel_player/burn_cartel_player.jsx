import React from 'react';
import SoundCloudAudio from 'soundcloud-audio';

class BurnCartelPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.playAndLoadTrack = this.playAndLoadTrack.bind(this);
    this.pauseTrack = this.pauseTrack.bind(this);
    this.playTrack = this.playTrack.bind(this);
    this.scAudio = new SoundCloudAudio(props.clientId);
    this.secondsToMinutes = this.secondsToMinutes.bind(this);
    this.track = null;
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
  }

  toggle() {
    this.props.togglePlay();
  }

  render() {
    const playText = (this.props.playing ? 'Pause' : 'Play');
    let details = <div></div>;

    if(this.track && this.props.trackLoaded) {
      details = (
        <div>
          <div>
            {this.track.name}
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
          {/* <button  type="submit">PLAY</button> */}

          <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.toggle}> {playText} </button>
        </div>
      </div>
		);
  }
}

export default BurnCartelPlayer;
