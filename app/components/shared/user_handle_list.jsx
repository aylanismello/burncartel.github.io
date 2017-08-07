import React from 'react';
import { List } from 'immutable';
import * as FontAwesome from 'react-icons/lib/fa/';

const UserHandleList = ({ handles, iconSize }) => {
	// TODO: add bandcamp if intelligntely indentify?
	const serviceIcons = {
		instagram: <FontAwesome.FaInstagram size={iconSize} />,
		facebook: <FontAwesome.FaFacebook size={iconSize} />,
		spotify: <FontAwesome.FaSpotify size={iconSize} />,
		twitter: <FontAwesome.FaTwitter size={iconSize} />,
		youtube: <FontAwesome.FaYoutube size={iconSize} />,
		default: <FontAwesome.FaLaptop size={iconSize} />
	};

	// ALSO CUT THIS LIST DOWN
	const services = List(handles.map(h => h.service));
	return (
		<div className="user-handle-list-container">
			{handles
				.filter(handle => {
					return (
						handle.service !== 'soundcloud' &&
						services.count(service => service === handle.service) < 2
					);
				})
				.slice(0, 4)
				.map((handle) => (
					<div className="clickable-banner-metadata">
						<a target="_" href={handle.url}>
							<div className="tiny-avatar-container">
								{serviceIcons[handle.service]
									? serviceIcons[handle.service]
									: serviceIcons.default}
							</div>
						</a>
					</div>
				))}
		</div>
	);
};

UserHandleList.defaultProps = {
	iconSize: 22
};

export default UserHandleList;
