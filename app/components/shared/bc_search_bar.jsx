import React from 'react';

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
