import React from 'react';

const CountryBadge = ({ track }) => {
	if (!track.locations || track.locations.length === 0) {
		return null;
	}

	let country = track.locations.filter(location => {
		return location.location_type === 'COUNTRY';
	})[0];

	if (!country) {
		return null;
	}

	console.log('COUNTRY IZ GOOD');

	return (
		<div className="country-badge-container">
			<img
				className="country-badge"
				src={country.flag_url}
				style={{ width: '50px' }}
			/>
		</div>
	);
};

export default CountryBadge;
