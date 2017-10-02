import React from 'react';
import { List } from 'immutable';
import * as FontAwesome from 'react-icons/lib/fa/';

export const renderUserHandles = (handles) => {

	// TODO: add bandcamp if intelligntely indentify?
	const serviceIcons = {
		instagram: <FontAwesome.FaInstagram />,
		facebook: <FontAwesome.FaFacebook />,
		spotify: <FontAwesome.FaSpotify />,
		twitter: <FontAwesome.FaTwitter />,
		youtube: <FontAwesome.FaYoutube />,
		default: <FontAwesome.FaLaptop />
	};

	// ALSO CUT THIS LIST DOWN

	const services = List(handles.map(h => h.service));

	return handles.filter((handle) => {
		return handle.service !== 'soundcloud' && services.count(service => service === handle.service) < 2;
	}).slice(0, 4).map((handle, idx) => (
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
