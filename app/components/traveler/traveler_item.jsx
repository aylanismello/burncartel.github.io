import React from 'react';
import PropTypes from 'prop-types';
import { FaList } from 'react-icons/lib/fa';
import { Link } from 'react-router-dom';
import CountryBadges from '../shared/country_badges';

const TravelerItem = ({ location }) => {
	const locationType = location.location_type;
	const numTracks = location.num_tracks;
	const numPublishers = location.num_publishers;

	let infoText = `... has ${numTracks} tracks, ${numPublishers} publishers`;

	if (locationType === 'CONTINENT') {
		infoText += `& has ${location.children_with_tracks.length} countries`;
	} else if (locationType === 'COUNTRY') {
		infoText += `& has ${location.children_with_tracks.length} cities`;
	}

	const locationFeedLink = `/traveler/${location.id}`;
	const nextInTreeLink = locationType === 'CITY'
		? locationFeedLink
		: `/traveler?parent_location=${location.id}`;

	return (
		<div className="row">
			<div className="col-sm-6 col-md-4 track-container">
				<div className="thumbnail">
					<div className="left-side">

						<div className="caption">
							{locationType === 'COUNTRY'
								? <CountryBadges locations={[location]} />
								: null}
							<Link to={nextInTreeLink}>
								<h3 className="user-title">{location.name}</h3>
							</Link>
							{infoText}
						</div>

					</div>
					<div className="right-side">
						<Link to={locationFeedLink}>
							<FaList size={50} className="bc-icon" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

TravelerItem.propTypes = {
	location: PropTypes.object.isRequired
};

export default TravelerItem;
