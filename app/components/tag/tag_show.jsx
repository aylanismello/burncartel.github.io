import React from 'react';
import FeedContainer from '../feed/feed_container';
import Loading from '../loading';

class TagShow extends React.Component {
	componentWillMount() {
		this.props.updateFilters({ resource: 'tags', id: this.props.id });
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.id !== this.props.id) {
			this.props.updateFilters({ resource: 'tags', id: nextProps.id });
		}
	}

	render() {
		if (this.props.loadingFeed && !this.props.tracksPage) {
			return <Loading />;
		} else {
			const { name } = this.props.tag;

			return (
				<div className="container user-show">
					<h2>
						{' '}results for tags:
					</h2>

					<span className="badge bc-tag bc-tag-link" style={{ fontSize: '16px' }}>
						{`#${name}`}
					</span>

					<FeedContainer />
				</div>
			);
		}
	}
}

export default TagShow;
