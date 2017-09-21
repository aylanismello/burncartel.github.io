import React from 'react';
import Tag from './tag';

const TagList = ({ tagList }) =>
	(<div className="tag-list">
		{tagList.map(tag => <Tag tag={tag} key={tag.id} />)}
	</div>);

export default TagList;
