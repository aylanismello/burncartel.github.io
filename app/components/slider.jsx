import React from 'react';

class Slider extends React.Component {
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

    this.props.onChange(e.currentTarget.value);
	}

	componentWillReceiveProps(nextProps) {
		if(this.props.value !== nextProps.value) {
			this.setState({
				value: nextProps.value
			});
			
			if (this.props.isVolume) {
				this.props.onChange(nextProps.value);
			}
		}


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

export default Slider;
