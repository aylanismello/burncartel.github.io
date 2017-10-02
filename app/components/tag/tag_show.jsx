import React from 'react';
import { Container } from 'semantic-ui-react';
import FeedContainer from '../feed/feed_container';
import Loading from '../shared/loading';
import Tag from '../shared/tag';

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
				<Container className="main-content user-show">
					{/* <div className="container user-show"> */}
					<h2> results for tags:</h2>

					<Tag tag={this.props.tag} size="medium" />
					{/* <span
						className="badge bc-tag bc-tag-link"
						style={{ fontSize: '16px' }}
					>
						{`#${name}`}
					</span> */}

					<FeedContainer />
				</Container>
			);
		}
	}
}

export default TagShow;
