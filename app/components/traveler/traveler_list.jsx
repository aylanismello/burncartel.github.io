import React from 'react';
import PropTypes from 'prop-types';
import TravelerItem from './traveler_item';

const TravelerList = ({ locations }) => {
	const childElements = locations.map((location, idx) => (
		<TravelerItem location={location} key={idx} />
	));

	return (
		<div className="feed-container">
			{childElements}
		</div>
	);
};

TravelerList.propTypes = {
	locations: PropTypes.instanceOf(Array).isRequired
};

export default TravelerList;
