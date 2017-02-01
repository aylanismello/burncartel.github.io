import React from 'react';
import SoundCloudAudio from 'soundcloud-audio';

// class CustomPlayer extends React.Component {
//
//   render() {
//     let { track, playing, currentTime } = this.props;
//
//     if (!track) {
//       return <div>Loading...</div>;
//     }
//
//     return (
//       <div>
//           <h2>{track.title}</h2>
//           <h3>{track.user.username}</h3>
//           <Timer className="h6 mr1" duration={track ? track.duration / 1000 : 0} currentTime={currentTime} {...this.props} />
//
//           <PlayButton className="flex-none h4 button button-transparent button-grow rounded" {...this.props} />
//           <Progress
//             {...this.props}
//           />
//
//       </div>
//     );
//   }
// }


class BurnCartelPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.scAudio = new SoundCloudAudio(props.clientId);
    this.track = null;
    // refactor this into reducer
    // bad idea! playing could be changed from a lot of places.
    this.state = {
      playing: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.trackId !== nextProps.trackId) {
      // const streamUrl = nextProps.tracks[nextProps.trackId].stream_url


      // this.track = nextProps.tracks[nextProps.trackId];
      this.track = nextProps.track;

      // this.scAudio.play({streamUrl: streamUrl})
    }
  }

  toggle() {
    this.setState({playing: !this.state.playing});
  }

  render() {
    const playText = (this.state.playing ? 'Pause' : 'Play');
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
