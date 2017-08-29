import React from 'react';
import PropTypes from 'prop-types';

class TravelerIndex extends React.Component {
	// we are getting locations, but tracks are empty
	componentWillMount() {
		console.log(this.props.query);
		if (!this.props.query.parent_location) {
			// THIS REALLY ONLY GETS TRIGGERED WHEN /traveler loads
			this.props.updateFilters({
				resource: 'locations',
				location_type: 0
			});
		} else {
			// this means we are getting children locations
			this.props.updateFilters({
				resource: 'locations',
				parent_location: this.props.query.parent_location
			});
		}
	}

	render() {
		return (
			<div className="container track-show">
				<h2>STUFFZ</h2>
			</div>
		);
	}
}

TravelerIndex.propTypes = {
	updateFilters: PropTypes.func.isRequired,
	query: PropTypes.object
};

TravelerIndex.defaultProps = {
	query: {}
};

export default TravelerIndex;
