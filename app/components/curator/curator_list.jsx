import React from 'react';
import CuratorItemContainer from './curator_item_container';

const style = {
	background: 'green'
};

const CuratorList = ({ track }) => {

	const childElements = track.curators.map((curator, idx) => (
		<CuratorItemContainer
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
