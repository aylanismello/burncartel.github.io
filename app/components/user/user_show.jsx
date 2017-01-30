import React from 'react';
import UserBanner from './user_banner';
import FeedContainer from '../feed/feed_container';

const UserShow = ({ user }) => {
	return (
		<div className="container user-show">
			<UserBanner user={user} />
			<h2> Latest selections </h2>
			<FeedContainer />
			{/* <UserList track={track} /> */}
		</div>
	);
};

export default UserShow;
