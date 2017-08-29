import React from 'react';
import PropTypes from 'prop-types';
import CountryBadge from '../shared/country_badge';
import { FaList } from 'react-icons/lib/fa';
import { Link } from 'react-router-dom';

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
						{/*  would be cool to have snapshots here..
              not we just have svgs of flags for locations of type 'COUNTRY'
              */}
						{/* <div className="artwork-wrapper">
							<Link to={`/curators/${user.id}`}>
								<img
									src={user.avatar_url}
									className="artwork-icon"
									alt="avatar"
								/>
								<span className="glyphicon glyphicon-play-circle" />
							</Link>
						</div> */}

						<div className="caption">
							{locationType === 'COUNTRY'
								? <CountryBadge locations={[location]} />
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
