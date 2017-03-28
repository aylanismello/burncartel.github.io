import React from 'react';
import SoundCloudAudio from 'soundcloud-audio';


// <Timer className="h6 mr1" duration={track ? track.duration / 1000 : 0} currentTime={currentTime} {...this.props} />
class BurnCartelPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.playAndLoadTrack = this.playAndLoadTrack.bind(this);
    this.pauseTrack = this.pauseTrack.bind(this);
    // this.resumeTrack = this.resumeTrack.bind(this);
    this.playTrack = this.playTrack.bind(this);
    this.scAudio = new SoundCloudAudio(props.clientId);
    this.track = null;
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
        // console.log(this.scAudio.audio.currentTime);
        this.props.updateCurrentTime(currentTime);
        // console.log(trackTime);
      }

      // what constitutes a play?
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

    // debugger;
    // console.log(nextProps.currentTime);

    // TRACK CHANGED
    if (this.props.trackId !== nextProps.trackId) {
      this.track = nextProps.track;
      this.props.setTrackNotLoaded();
      // if(process.env.NODE_ENV !== 'hotspot') {
      this.playAndLoadTrack();
      // } else {
        // console.log('hotspot! i do not want to play the track and use dataz :(');
      // }
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
            by {this.track.publisher.name}
          </div>
          <div>
            {this.props.currentTime}
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
          <button onClick={this.toggle}> {playText} </button>
        </div>
      </div>
		);
  }
}


export default BurnCartelPlayer;
