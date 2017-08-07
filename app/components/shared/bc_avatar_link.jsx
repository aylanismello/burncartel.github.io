import React from 'react';
import { Link } from 'react-router-dom';

const BCAvatarLink = ({ userType, userId, avatarUrl, userName }) => (
	<Link
		to={`/${userType}/${userId}`}
		key={`${userType}`}
		className="clickable-banner-metadata"
	>
		<div className="tiny-avatar-container">
			<img src={avatarUrl} alt="avatar" />
		</div>

		{userName}
	</Link>
);

export default BCAvatarLink;
