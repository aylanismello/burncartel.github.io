import React from 'react';
import UserList from '../shared/user_list';
import TagList from '../shared/tag_list';
import { renderUserHandles } from '../../util/component_helpers';

const PublisherBanner = ({ user }) => {
	return (
		<div
			className="thumbnail track-banner"
		>
			<div className="left-side">
				<h2> {user.name}</h2>
				<img src={user.avatar_url} />
				{renderUserHandles(user.handles)}
				<h3> Most selected by </h3>
				<UserList
					users={user.top_curators}
					userType="curators"
					length={5}
				/>
			</div>

			<div className="right-side">
				<TagList tagList={user.top_tags.slice(0, 5)} />
			</div>
		</div>
	);
};

export default PublisherBanner;
