import React from 'react';
import { Link } from 'react-router-dom';

const BCAvatarLink = ({
	userType,
	userId,
	avatarUrl,
	userName,
	avatarSize
}) => {

	let className;
	if (avatarSize === 'small') {
		className = 'tiny-avatar-container';
	} else {
		className = 'large-avatar-container';
	}

	return (
		<Link
			to={`/${userType}/${userId}`}
			key={`${userType}`}
			className="clickable-banner-metadata"
		>
			<div className={className}>
				<img src={avatarUrl} alt="avatar" />
			</div>

			{userName}
		</Link>
	);
};

BCAvatarLink.defaultProps = {
	avatarSize: 'small'
};

export default BCAvatarLink;
