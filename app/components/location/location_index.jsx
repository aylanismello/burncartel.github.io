import React from 'react';
import PropTypes from 'prop-types';
import LocationList from './location_list';
import Loading from '../shared/loading';

class LocationIndex extends React.Component {
	// we are getting locations, but tracks are empty

	constructor(props) {
		super(props);
		this.renderHeader = this.renderHeader.bind(this);
	}

	componentWillMount() {
		if (!this.props.query.parent_location) {
			// THIS REALLY ONLY GETS TRIGGERED WHEN locations loads
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

	componentWillReceiveProps(nextProps) {
		// if we are looking at parent_location changes
		const { parent_location } = this.props.query;
		if (parent_location !== nextProps.query.parent_location) {
			if (nextProps.query.parent_location) {
				this.props.updateFilters({
					resource: 'locations',
					parent_location: nextProps.query.parent_location
				});
			} else {
				this.props.updateFilters({
					resource: 'locations',
					location_type: 0
				});
			}
		}
	}

	renderHeader(travelerTreePosition) {
		if (travelerTreePosition === 'root') {
			return (
				<h2>
					Explore the world through Fire Feed 🌍
				</h2>
			);
		} else {
			return (
				<h2>
					Explore tracks in {this.props.locations[0].parent_location.name}
				</h2>
			);
		}
	}

	render() {
		if (!this.props.locations || this.props.loadingFeed) {
			return <Loading />;
		} else {
			return (
				<div className="container track-show">
					{this.props.query.parent_location
						? this.renderHeader('other')
						: this.renderHeader('root')}
					<LocationList
						locations={this.props.locations}
					/>
				</div>
			);
		}
	}
}

LocationIndex.propTypes = {
	updateFilters: PropTypes.func.isRequired,
	query: PropTypes.object,
	locations: PropTypes.object,
	loadingFeed: PropTypes.bool.isRequired
};

LocationIndex.defaultProps = {
	query: {},
	locations: null
};

export default LocationIndex;
