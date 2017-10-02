import React from 'react';
import PropTypes from 'prop-types';
import LocationItem from './location_item';

const LocationList = ({ locations }) => {
	const childElements = locations.map((location, idx) => (
		<LocationItem location={location} key={idx} />
	));

	return (
		<div className="feed-container">
			{childElements}
		</div>
	);
};

LocationList.propTypes = {
	locations: PropTypes.instanceOf(Array).isRequired
};

export default LocationList;
