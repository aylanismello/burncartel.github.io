import React from 'react';
import CuratorBanner from './curator_banner';
import FeedContainer from '../feed/feed_container';
import Loading from '../shared/loading';

class CuratorShow extends React.Component {
	componentWillMount() {
		this.props.updateFilters({ resource: 'curators', id: this.props.id });
		this.state = {
			loadingAnotherCurator: false
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.id !== this.props.id) {
			this.setState({ loadingAnotherCurator: true });
			this.props.updateFilters({ resource: 'curators', id: nextProps.id });
		}

		if (this.props.loadingFeed && !nextProps.loadingFeed) {
			this.setState({ loadingAnotherCurator: false });
		}
	}

	render() {
		if ((this.props.loadingFeed && !this.props.tracksPage) || this.state.loadingAnotherCurator) {
			return <Loading />;
		} else {
			return (
				<div className="container user-show track-show">
					<CuratorBanner user={this.props.curator} />
					<h2> Top selections </h2>
					<FeedContainer />
				</div>
			);
		}
	}
}

export default CuratorShow;
