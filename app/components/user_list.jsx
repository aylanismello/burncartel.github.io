import React from 'react';
import UserItemContainer from './user_item_container';

const UserList = ({ track }) => {

	const childElements = track.curators.map((curator, idx) => (
		<UserItemContainer
			user={curator}
			key={idx}
		/>
	));

	return (
		<div className="feed-container">
			<h1> Selected by: </h1>
			{childElements}
		</div>
	);
};

export default UserList;
