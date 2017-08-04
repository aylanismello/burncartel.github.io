import React from 'react';

const Tag = ({ tag }) => (
	<span className="badge bc-tag">
		<a href={`#/tags/${tag.id}`}>{`#${tag.name}`}</a>
	</span>
);

const TagList = ({ tagList }) => (
	<div className="tag-list">
		{tagList.map(tag => <Tag tag={tag} />)}
	</div>
);

export default TagList;
