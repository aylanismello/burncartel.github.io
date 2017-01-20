import React from 'react';
import UserBanner from './user_banner';

const UserShow = ({ user }) => {
	return (
		<div className="container user-show">
			<UserBanner user={user} />
			{/* <UserList track={track} /> */}
		</div>
	);
};

export default UserShow;
