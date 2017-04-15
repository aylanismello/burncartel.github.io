import React from 'react';
import CuratorBanner from './curator_banner';
import FeedContainer from '../feed/feed_container';
import Loading from '../loading';

const CuratorShow = ({ user, id, updateFilters }) => {

	if(!user) {
		updateFilters({curator: id});

		return (
			<Loading />
		);
	} else {
		return (
			<div className="container user-show">
				<CuratorBanner user={user} />
				<h2> Latest selections </h2>
				<FeedContainer />
			</div>
		);
	}
};

export default CuratorShow;
