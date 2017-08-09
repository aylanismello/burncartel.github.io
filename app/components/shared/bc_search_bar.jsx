import React from 'react';
import { FaSearch } from 'react-icons/lib/fa';

class BCSearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			searchText: ''
		};
	}

	handleChange(e) {
		this.setState({ searchText: e.target.value });
	}

	handleSubmit() {
		window.location = `/#search?q=${this.state.searchText}`;
	}

	render() {
		return (
			<div className="col-lg-3 search-bar-container">
				<form className="input-group" onSubmit={() => this.handleSubmit()}>
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

export default BCSearchBar;
