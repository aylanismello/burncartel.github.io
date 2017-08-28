import React from 'react';
import PropTypes from 'prop-types';
import InfoDropdown from './info_dropdown';

const CountryBadge = ({ locations, width }) => {
	// aspect ratio is 2:1
	const widthInPx = `${width}px`;
	const heightInPx = `${width / 2}px`;

	if (!locations || locations.length === 0) {
		return null;
	}

	const countries = locations.filter(location => {
		return location.location_type === 'COUNTRY';
	});

	if (countries.length === 0) {
		return null;
	}

	return (
		<div className="country-badge-container">
			{countries.map(country => {
				return (
					<InfoDropdown
						location={country}
						infoType="locations"
						length={2}
					>
						<a href={`/#/search?q=${country.name}&resource_type=location`}>
							<img
								className="country-badge"
								src={country.flag_url}
								style={{ width: widthInPx, height: heightInPx }}
							/>
						</a>
					</InfoDropdown>
				);
			})}
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
