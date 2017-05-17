import React from 'react';
import { Link } from 'react-router-dom';
import * as FontAwesome from 'react-icons/lib/fa/';


export const renderUserList = (users, userType) => {
	return users.map((user, idx) => (
		<div className="clickable-banner-metadata">
			<div className="tiny-avatar-container">
				<img src={user.avatar_url} alt="avatar" />
			</div>

			<Link
				to={`/${userType}/${user.id}`}
				key={`${userType}-${idx}`}>
				{user.name}
			</Link>
		</div>
	));
};


export const renderUserHandles = (handles) => {

	const serviceIcons = {
		instagram: <FontAwesome.FaInstagram />,
		facebook: <FontAwesome.FaFacebook />,
		spotify: <FontAwesome.FaSpotify />,
		twitter: <FontAwesome.FaTwitter />,
		youtube: <FontAwesome.FaYoutube />,
		default: <FontAwesome.FaLaptop />,
	};


	return handles.filter(handle => handle.service !== 'soundcloud').map((handle, idx) => (
		<div className="clickable-banner-metadata">
			<div className="tiny-avatar-container">
				{serviceIcons[handle.service] ?
					serviceIcons[handle.service]
					: serviceIcons.default
				}
			</div>

			<a
				target="_"
				href={handle.url}
			>
				{handle.service}
			</a>
		</div>
	));
};
