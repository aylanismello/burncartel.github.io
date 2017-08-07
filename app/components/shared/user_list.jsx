import React from 'react';
import { Link } from 'react-router-dom';

const UserList = ({ users, userType, length }) => {
	return (
		<div className="user-list-container">
			{users.slice(0, length).map((user, idx) => (
					<Link to={`/${userType}/${user.id}`} key={`${userType}-${idx}`}
						className="clickable-banner-metadata">
					<div className="tiny-avatar-container">
						<img src={user.avatar_url} alt="avatar" />
					</div>

						{user.name}
					</Link>
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
