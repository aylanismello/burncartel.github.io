import React from 'react';
import * as FontAwesome from 'react-icons/lib/fa/';
import Slider from './slider';

class VolumeControl extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      muted: false,
      volume: 100
    };
  }

  handleClick() {
    const willBeMuted = !this.state.muted;
    this.setState({
      muted: willBeMuted,
      volume: ((willBeMuted) ? 0 : 100)
    });
  }

  render() {
    return (
      <div>
        <FontAwesome.FaVolumeUp
          size={40}
          color={this.state.muted ? 'black' : 'white'}
          className="bc-icon"
          onClick={() => this.handleClick()}
        />
        <div className="volume-slider">
          <Slider
            value={this.state.volume}
            isVolume={true}
            onChange={newValue => {
              window.sc.audio.volume = newValue / 100;
            }}
          />
        </div>
      </div>
    );
  }
}

export default VolumeControl;
