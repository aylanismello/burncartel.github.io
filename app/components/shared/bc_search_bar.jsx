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

	render() {
		return (
			<div className="col-lg-3 search-bar-container">
				<div className="input-group">
					<FaSearch
						size={15}
						color="#3c3e3f"
						className="search-bar-icon"
					/>
					<input
						type="text"
						className="form-control search-bar"
						placeholder="Search"
					/>

				</div>
			</div>
		);
	}
}

export default BCSearchBar;
