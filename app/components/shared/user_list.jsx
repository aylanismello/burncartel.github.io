import React from 'react';
import BCAvatarLink from './bc_avatar_link';

const UserList = ({ users, userType, length }) => {
	return (
		<div className="user-list-container">
			{users
				.slice(0, length)
				.map(user => (
					<BCAvatarLink
						userType={userType}
						key={user.id}
						userId={user.id}
						avatarUrl={user.avatar_url}
						userName={user.name}
						avatarSize="small"
					/>
				))}
		</div>
	);
};

UserList.defaultProps = {
	users: [],
	userType: 'curators',
	length: 5
};

export default UserList;
