import React from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/lib/fa';

class BCSearchBar extends React.Component {
	constructor(props, context) {
		super(props);
		debugger;
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			searchText: ''
		};
	}

	handleChange(e) {
		this.setState({ searchText: e.target.value });
	}

	handleSubmit(e) {
		// WHAT'S THE REACT WAY TO THIS, THIS SHIT IS JANKY
		// AND ONLY PUSH THE NEW HASH LOCATION THE FIRST TIME
		window.location = `/#search?q=${this.state.searchText}`;
		e.preventDefault();
	}

	render() {
		return (
			<div className="col-lg-3 search-bar-container">
				<form className="input-group" onSubmit={(e) => this.handleSubmit(e)}>
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

BCSearchBar.contextTypes = {
	router: PropTypes.object
};

export default BCSearchBar;
