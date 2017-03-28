import React from 'react';
import UserBanner from './user_banner';
import FeedContainer from '../feed/feed_container';
import Loading from '../loading';

const UserShow = ({ user, id, updateFilters }) => {

	if(!user) {
		updateFilters({curator: id});

		return (
			<Loading />
		);
	} else {
		return (
			<div className="container user-show">
				<UserBanner user={user} />
				<h2> Latest selections </h2>
				<FeedContainer />
			</div>
		);
	}
};

export default UserShow;
