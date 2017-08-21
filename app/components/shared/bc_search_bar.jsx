import React from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/lib/fa';

class BCSearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			searchText: ''
		};
	}

	componentWillMount() {
		if (this.props.q) {
			this.setState({ searchText: this.props.q });
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.q !== this.props.q) {
			this.setState({ searchText: nextProps.q });
		}
	}

	canSubmit() {
		// if we have only whitespace, this returns '' which is falsy in JS
		return this.state.searchText.trim();
	}

	handleSubmit(e) {
		// WHAT'S THE REACT WAY TO THIS, THIS SHIT IS JANKY
		// AND ONLY PUSH THE NEW HASH LOCATION THE FIRST TIME
		if (this.canSubmit()) {
			window.location = `/#search?q=${this.state.searchText}&resource_type=track`;
		}
		e.preventDefault();
	}

	handleChange(e) {
		this.setState({ searchText: e.target.value });
	}

	render() {
		return (
			<div className="col-lg-3 search-bar-container">
				<form className="input-group" onSubmit={e => this.handleSubmit(e)}>
					<FaSearch size={16} color="#3c3e3f" className="search-bar-icon" />
					<input
						type="text"
						className="form-control search-bar"
						value={this.state.searchText}
						onChange={e => this.handleChange(e)}
						placeholder="Search"
					/>

				</form>
			</div>
		);
	}
}

BCSearchBar.props = {
	q: PropTypes.string
};

export default BCSearchBar;
