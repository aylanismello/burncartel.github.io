import React from 'react';
import SoundCloudAudio from 'soundcloud-audio';

class BurnCartelPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.playAndLoadTrack = this.playAndLoadTrack.bind(this);
    this.pauseTrack = this.pauseTrack.bind(this);
    this.playTrack = this.playTrack.bind(this);
    this.formatTime = this.formatTime.bind(this);
    this.scAudio = new SoundCloudAudio(props.clientId);
    this.track = null;
  }

  formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    if(seconds < 10) {
      return `${minutes}:0${seconds}`
    } else {
      return `${minutes}:${seconds}`
    }
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

      // what constitutes a play? for counting purposes?
      // a whole play through... a few seconds?
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
    // CURRENT TRACK JUST CHANGED STATE
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
            {/* {
              if(this.track.publisher) {
                return (
                  <p> by {this.track.publisher.name} </p>
                )
              }
            } */}
          </div>
          <div>
            {this.formatTime(this.props.currentTime)}
          </div>
        </div>
    );
  } else if(this.track && !this.props.trackLoaded) {
    details = (
      <div>
        LOADING
      </div>
    );
  }

    return (
      <div className="burn-cartel-player-container">

        <div className='burn-cartel-player-details'>
          {details}
        </div>

        <div className='burn-cartel-player-control'>
          <button onClick={this.toggle}> {playText} </button>
        </div>
      </div>
		);
  }
}


export default BurnCartelPlayer;
