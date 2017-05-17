import React from 'react';
import { renderUserList, renderUserHandles } from '../../util/component_helpers';

const PublisherBanner = ({ user }) => {
	return (
		<div
			className="thumbnail track-banner"
		>
			<h2> {user.name}</h2>
			<img src={user.avatar_url} />
			{renderUserHandles(user.handles)}
			<h3> Most selected by </h3>
			{renderUserList(user.top_curators, 'curators')}
		</div>
	);
};

export default PublisherBanner;
