import React from 'react';
import { Link } from 'react-router';

const UserItem = ({ user }) => {
	// the thing we're going to print out here is actually
	// the location data we've found using geocode api and more
	const userLocation = (user.city ? user.city : 'nowhere, usa');
	return (
		<div className="row">
			<div className="col-sm-6 col-md-4 user-container">
				<div className="thumbnail">

					<Link
						to={`/users/${user.id}`}
					>
						<div className="caption">
							<h3 className="user-title">{user.name}</h3>
							<h4 className="user-location">Based out of {userLocation}</h4>
							<span>Posted <a href="#">{user.track_count}</a> tracks</span>
								<div className="fire-emoji-container">
								<img
									src={user.avatar_url}/>
							</div>
								{/* <a href="#" className="btn btn-default" role="button">Button</a> */}
						</div>
					</Link>

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
