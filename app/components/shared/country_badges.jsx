import React from 'react';
import PropTypes from 'prop-types';
import InfoDropdown from './info_dropdown';

const CountryBadges = ({ locations, width }) => {
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
						key={country.name}
						length={2}
					>
						<a href={`/#locations/${country.id}`}>
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

CountryBadges.propTypes = {
	locations: PropTypes.object,
	width: PropTypes.number
};

CountryBadges.defaultProps = {
	width: 45
};

export default CountryBadges;
