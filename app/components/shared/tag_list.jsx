import React from 'react';

const Tag = ({ tag }) => (
	<span className="badge bc-tag">
		<a className="bc-tag-link" href={`#/tags/${tag.id}`}>{`#${tag.name}`}</a>
	</span>
);

const TagList = ({ tagList }) => (
	<div className="tag-list">
		{tagList.map(tag => <Tag tag={tag} key={tag.id} />)}
	</div>
);

export default TagList;
