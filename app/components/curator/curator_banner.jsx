import React from 'react';
import UserList from '../shared/user_list';
import TagList from '../shared/tag_list';
import Loading from '../shared/loading';

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
					<div className="main-user-summary">
						<h2> {user.name}</h2>
						<img src={user.avatar_url} />
					</div>
					<div className="user-selection-summary">
						<h5> Most published artists </h5>
						<UserList
							users={user.top_publishers}
							userType="publishers"
							length={5}
						/>
					</div>
				</div>

				<div className="right-side">
					<TagList tagList={user.top_tags.slice(0, 5)} />
				</div>
			</div>
		);
	}
};

export default CuratorBanner;
