import React from 'react';
import * as FontAwesome from 'react-icons/lib/fa/';
import * as _ from 'lodash';
import Slider from './slider';

class VolumeControl extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			muted: false,
			volume: 100
		};
	}

	componentWillUpdate(nextProps, nextState) {
		if (!_.isEqual(this.state, nextState)) {
			if (parseInt(nextState.volume) !== 0 && nextState.muted) {
				this.setState({ muted: false });
			} else if (parseInt(nextState.volume) === 0 && !nextState.muted) {
				this.setState({ muted: true });
			}

			window.sc.audio.volume = nextState.volume / 100;
		}
	}

	handleMuteButtonClick() {
		const willBeMuted = !this.state.muted;
		this.setState({
			muted: willBeMuted,
			volume: willBeMuted ? 0 : 100
		});
	}

	handleSliderChange(newValue) {
		this.setState({
			volume: newValue
		});
	}

	render() {
		return (
			<div className="volume-slider-container">
				<div className="mute-button-container">
					<FontAwesome.FaVolumeUp
						size={25}
						color={this.state.muted ? 'black' : 'white'}
						className="bc-icon"
						onClick={() => this.handleMuteButtonClick()}
					/>
				</div>

				<div className="volume-slider">
					<Slider
						value={this.state.volume}
						isVolume={true}
						onChange={newValue => this.handleSliderChange(newValue)}
					/>
				</div>
			</div>
		);
	}
}

export default VolumeControl;
