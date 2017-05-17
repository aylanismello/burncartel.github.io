import React from 'react';
import { Link } from 'react-router-dom';

const CuratorItem = ({ user }) => {
	// the thing we're going to print out here is actually
	// the location data we've found using geocode api and more
	const userLocation = user.city ? user.city : 'nowhere, usa';
	return (
		<div className="row">
			<div className="col-sm-6 col-md-4 track-container">
				<div className="thumbnail">

					<div className="artwork-wrapper">
						<img src={user.avatar_url} className="artwork-icon" alt="avatar"/>
						<span className="glyphicon glyphicon-play-circle" />
					</div>

					<div className="caption">

						<Link to={`/curators/${user.id}`}>
							<h3 className="user-title">{user.name}</h3>
						</Link>

						<h4 className="user-location">Based out of {userLocation}</h4>
						<span>Posted <a href="#">{user.track_count}</a> tracks</span>
						<div className="fire-emoji-container" />
					</div>

				</div>
			</div>
		</div>
	);
};

export default CuratorItem;
