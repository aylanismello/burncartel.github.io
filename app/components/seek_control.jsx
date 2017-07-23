import React from 'react';
import Slider from './slider';

class SeekControl extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="seek-slider">
        <div className="seek-slide-time"> {this.props.secondsToMinutes(this.props.currentTime)} </div>
        <Slider
          onChange={(newValue) => {

            const secondsInSong = this.props.trackDuration / 1000;

            this.props.seekToTime(secondsInSong * (newValue / 100));
          }}
          isVolume={false}
          value={(this.props.currentTime / (this.props.trackDuration / 1000)) * 100}
        />
        <div className="seek-slide-time"> {this.props.secondsToMinutes(Math.floor(this.props.trackDuration / 1000))} </div>
      </div>
    );
  }
}

export default SeekControl;
