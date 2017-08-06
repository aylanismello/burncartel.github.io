import React from 'react';
import CuratorBanner from './curator_banner';
import FeedContainer from '../feed/feed_container';
import Loading from '../shared/loading';

class CuratorShow extends React.Component {
	componentWillMount() {
		this.props.updateFilters({ resource: 'curators', id: this.props.id });
	}

	render() {
		if (this.props.loadingFeed && !this.props.tracksPage) {
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
