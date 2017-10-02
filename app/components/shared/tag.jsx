import React from 'react';
import { Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Tag = ({ tag, size }) =>
	(<Label className="bc-tag" color="blue" size={size}>
		<Link className="bc-tag-link" to={`/tags/${tag.id}`}>{`#${tag.name}`}</Link>
	</Label>);

Tag.propTypes = {
	size: PropTypes.string,
	tag: PropTypes.objectOf(PropTypes.string).isRequired
};

Tag.defaultProps = {
	size: 'tiny'
};

export default Tag;
