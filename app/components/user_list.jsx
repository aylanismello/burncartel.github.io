import React from 'react';
import UserItem from './user_item';

const UserList = ({ track }) => {

	const childElements = track.curators.map((curator) => (
		<UserItem user={curator} />
	));

	return (
		<div className="feed-container">
			<h1> Selected by: </h1>
			{childElements}
		</div>
	);
};

export default UserList;
