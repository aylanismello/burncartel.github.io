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

    // this.scAudio.on('timeupdate', () => {
    //   console.log(this.scAudio.audio.currentTime);
    // });

    this.scAudio.on('ended', () => {
      this.props.updateTrackId(this.props.nextTrackId);
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

    // TRACK CHANGED
    if (this.props.trackId !== nextProps.trackId) {
      this.track = nextProps.track;

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
        // debugger;
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

    if(this.track) {

      details = (
        <div>
          <div>
            {this.track.name}
          </div>
          <div>
            by {this.track.publisher.name}
          </div>
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
