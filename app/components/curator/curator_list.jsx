import React from 'react';
// import CuratorItemContainer from './curator_item_container';
import CuratorItem from './curator_item';

const CuratorList = ({ track }) => {
	const childElements = track.curators.map((curator, idx) => (
		<CuratorItem
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

export default CuratorList;
