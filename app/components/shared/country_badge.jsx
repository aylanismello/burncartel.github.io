import React from 'react';
import PropTypes from 'prop-types';

const CountryBadge = ({ locations, width }) => {
	const widthInPx = `${width}px`;

	if (!locations || locations.length === 0) {
		return null;
	}

	let country = locations.filter(location => {
		return location.location_type === 'COUNTRY';
	})[0];

	if (!country) {
		return null;
	}

	return (
		<div className="country-badge-container">
			<img
				className="country-badge"
				src={country.flag_url}
				style={{ width: widthInPx }}
			/>
		</div>
	);
};

CountryBadge.propTypes = {
	locations: PropTypes.object,
	width: PropTypes.number
};

CountryBadge.defaultProps = {
	width: 45
};

export default CountryBadge;
