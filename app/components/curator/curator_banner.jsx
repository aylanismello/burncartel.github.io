import React from 'react';
import TagList from '../shared/tag_list';
import Loading from '../loading';
import { renderUserList } from '../../util/component_helpers';

const CuratorBanner = ({ user }) => {
	if (!user.top_publishers) {
		return (
			<div>
				<Loading />
			</div>
		);
	} else {
		return (
			<div className="thumbnail track-banner">
				<div className="left-side">
					<h2> {user.name}</h2>
					<img src={user.avatar_url} />
					<h3> Most published artists </h3>
					{renderUserList(user.top_publishers, 'publishers')}
				</div>

				<div className="right-side">
					<TagList tagList={user.top_tags.slice(0, 5)} />
				</div>
			</div>
		);
	}
};

export default CuratorBanner;
