import React from 'react';
import { Link } from 'react-router-dom';

const style = {
	border: '5px solid black'
};

const CuratorItem = ({ user, handleUserChange }) => {
	// the thing we're going to print out here is actually
	// the location data we've found using geocode api and more
	const userLocation = (user.city ? user.city : 'nowhere, usa');
	return (
		<div className="row">
			<div className="col-sm-6 col-md-4 track-container">
				<div
					className="thumbnail"
					onClick={() => handleUserChange(user.id)}
				>

					<div className="artwork-wrapper">
						<img
							src={user.avatar_url}
							className="artwork-icon"
						/>
						{/* <img
							src='http://wptf.com/wp-content/uploads/2014/05/play-button.png'
							className="artwork-play"
						/> */}
						<span className="glyphicon glyphicon-play-circle"/>
					</div>


					<div className="caption">

						<Link
							to={`/curators/${user.id}`}
						>
							<h3 className="user-title">{user.name}</h3>
						</Link>

						<h4 className="user-location">Based out of {userLocation}</h4>
						<span>Posted <a href="#">{user.track_count}</a> tracks</span>
							<div className="fire-emoji-container">

						</div>
							{/* <a href="#" className="btn btn-default" role="button">Button</a> */}
					</div>

				</div>
			</div>
		</div>
	);
};

export default CuratorItem;
