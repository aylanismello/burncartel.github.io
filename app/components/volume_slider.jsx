import React from 'react';

class VolumeSlider extends React.Component {
	constructor(props) {
		super(props);
    this.handleChange = this.handleChange.bind(this);
		this.state = {
			value: 100
		};
	}

	handleChange(e) {
		this.setState({
			value: e.currentTarget.value
		});

    this.props.onVolumeChange(e.currentTarget.value);
	}

	render() {
		const { value } = this.state;
		return (
			<div className="slider">

        <input
          type="range"
          value={this.state.value}
          onChange={this.handleChange}
        />

			</div>
		);
	}
}

export default VolumeSlider;
