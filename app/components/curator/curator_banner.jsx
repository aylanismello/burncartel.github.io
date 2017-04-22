import React from 'react';

const CuratorBanner = ({ user }) => {
	return (
		<div
			className="thumbnail user-banner"
		>
			<h2> {user.name}</h2>
			<img src={user.avatar_url} />

		</div>
	);
};

export default CuratorBanner;
