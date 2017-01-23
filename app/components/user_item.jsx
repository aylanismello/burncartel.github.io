import React from 'react';
import { Link } from 'react-router';

const style = {
	border: '5px solid black'
};

const UserItem = ({ user, handleUserChange }) => {
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
						<img
							src='http://wptf.com/wp-content/uploads/2014/05/play-button.png'
							className="artwork-play"
						/>
						<span className="glyphicon glyphicon-play-circle"/>
					</div>


					<div className="caption">

						<Link
							to={`/users/${user.id}`}
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

export default UserItem;

// avatar_url
// :
// "https://i1.sndcdn.com/avatars-000218769163-7ah95v-large.jpg"
// city
// :
// "London"
// country
// :
// "Britain (UK)"
// created_at
// :
// "2017-01-10T08:09:18.512Z"
// followers_count
// :
// 28507
// followings_count
// :
// 684
// id
// :
// 4
// name
// :
// "TheGoodVibe.co"
// permalink_url
// :
// "http://soundcloud.com/thegoodvibeco"
// soundcloud_id
// :
// 107710371
// track_count
// :
// 112
// updated_at
// :
// "2017-01-10T08:09:18.512Z"
