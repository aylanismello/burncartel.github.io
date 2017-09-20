import React from 'react';
import { Container } from 'semantic-ui-react';
import PublisherBanner from './publisher_banner';
import FeedContainer from '../feed/feed_container';
import Loading from '../shared/loading';

class PublisherShow extends React.Component {
	componentWillMount() {
		this.props.updateFilters({ resource: 'publishers', id: this.props.id });
		this.state = {
			loadingAnotherPublisher: false
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.id !== this.props.id) {
			this.setState({ loadingAnotherPublisher: true });
			this.props.updateFilters({ resource: 'publishers', id: nextProps.id });
		}

		if (this.props.loadingFeed && !nextProps.loadingFeed) {
			this.setState({ loadingAnotherPublisher: false });
		}
	}

	render() {
		if (
			(this.props.loadingFeed && !this.props.tracksPage) ||
			this.state.loadingAnotherPublisher
		) {
			return <Loading />;
		} else if (Object.keys(this.props.publisher).length > 0) {
			return (
				<Container className="main-content track-show">
					<PublisherBanner user={this.props.publisher} />

					<FeedContainer />
				</Container>
			);
		} else {
			return <div />;
		}
	}
}

export default PublisherShow;
