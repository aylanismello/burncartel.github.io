import React from 'react';
import FeedContainer from '../feed/feed_container';
import Loading from '../shared/loading';

class TagShow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loadingAnotherTag: false
		};
	}

	componentWillMount() {
		this.props.updateFilters({ resource: 'tags', id: this.props.id });
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.id !== this.props.id) {
			this.setState({ loadingAnotherTag: true });
			this.props.updateFilters({ resource: 'tags', id: nextProps.id });
		}

		if (this.props.loadingFeed && !nextProps.loadingFeed) {
			this.setState({ loadingAnotherTag: false });
		}
	}

	render() {
		if ((this.props.loadingFeed && !this.props.tracksPage) || this.state.loadingAnotherTag) {
			return (
				<div className="container user-show">
					<Loading />
				</div>
			);
		} else {
			const { name } = this.props.tag;

			return (
				<div className="container user-show">
					<h2>
						{' '}results for tags:
					</h2>

					<span
						className="badge bc-tag bc-tag-link"
						style={{ fontSize: '16px' }}
					>
						{`#${name}`}
					</span>

					<FeedContainer />
				</div>
			);
		}
	}
}

export default TagShow;
