import React from 'react';

const UserBanner = ({ user }) => {
	return (
		<div className="thumbnail track-banner">
			<h2> {user.name}</h2>
			<img src={user.avatar_url} />
		</div>
	);
};

export default UserBanner;
