import React from 'react';
import UserList from '../shared/user_list';
import TagList from '../shared/tag_list';
import CountryBadges from '../shared/country_badges';
import UserHandleList from '../shared/user_handle_list';

const PublisherBanner = ({ user }) => {
	return (
		<div className="thumbnail track-banner">
			<div className="left-side">
				<div className="main-user-summary">
					<h2> {user.name}</h2>
					<img src={user.avatar_url} />
					<UserHandleList handles={user.handles} />
				</div>
				<div className="user-selection-summary">
					<h5> Most selected by </h5>
					<UserList users={user.top_curators} userType="curators" length={5} />
				</div>
			</div>

			<div className="right-side">
				<CountryBadges locations={user.locations} width={100} />
				<TagList tagList={user.top_tags.slice(0, 5)} />
			</div>
		</div>
	);
};

export default PublisherBanner;
