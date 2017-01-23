import React from 'react';

const style = {
	border: '5px solid black'
};

const UserBanner = ({ user }) => {
	return (
		<div
			className="thumbnail user-banner"
			style={style}
		>
			<h2> {user.name}</h2>
			<img src={user.avatar_url} />
		</div>
	);
};

export default UserBanner;1
