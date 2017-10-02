import React from 'react';
import PropTypes from 'prop-types';
import { Search, Grid } from 'semantic-ui-react';

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

		// the right way is to pass the context props called router to this component somehow
		e.preventDefault();
		if (this.canSubmit()) {
			window.location = `/#search?q=${this.state.searchText}&resource_type=track`;
		}
	}

	handleChange(e) {
		this.setState({ searchText: e.target.value });
	}

	render() {
		return (
			<Grid className="search-bar-container" style={{ marginLeft: '200px' }}>
				<Grid.Column width={8}>
					<form onSubmit={e => this.handleSubmit(e)}>
						<Search
							size="small"
							open={false}
							value={this.state.searchText}
							placeholder="Search"
							onSearchChange={e => this.handleChange(e)}
						/>
					</form>
				</Grid.Column>
			</Grid>
		);
	}
}

BCSearchBar.propTypes = {
	q: PropTypes.string
};

BCSearchBar.defaultProps = {
	q: null
};

export default BCSearchBar;
