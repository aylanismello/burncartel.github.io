import React from 'react';
import CuratorBanner from './curator_banner';
import FeedContainer from '../feed/feed_container';
import Loading from '../loading';

class CuratorShow extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		if(!this.props.curator) {
			this.props.setFeedType('CURATOR');
			this.props.updateFilters({ curator: this.props.id });
		}
	}

	render() {
		if(!this.props.curator) {
			return (
				<Loading />
			);
		} else {
			return (
				<div className="container user-show">
					<CuratorBanner user={this.props.curator} />
					<h2> Latest selections </h2>
					<FeedContainer />
				</div>
			);
		}
	}

}

export default CuratorShow;
