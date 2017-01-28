import React from 'react';
import SoundCloudAudio from 'soundcloud-audio';

// class CustomPlayer extends React.Component {
//
//   render() {
//     debugger;
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
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.trackId !== nextProps.trackId) {
      const streamUrl = nextProps.tracks[nextProps.trackId].stream_url
      this.scAudio.play({streamUrl: streamUrl})
    }
  }

  toggle() {

  }

  render() {

    return (
      <div className="burn-cartel-player-container">
        <button onClick={this.toggle()}>Play </button>
      </div>
		);
  }
}


export default BurnCartelPlayer;
