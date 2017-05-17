import React from 'react';
import TrackBanner from './track_banner';
import Loading from '../loading';
import CuratorList from '../curator/curator_list';
import FireLike from '../likes/fire_like';

// There are two scenarios here. One is that
// a user got sent here via the internal react-router,
// which means their track is in the store.

// The second is that they refreshed or used another outside
// link or bookmark. In this case, we will have to hit the api
// and add this song somehwo to our redux store

class TrackShow extends React.Component {
	componentWillMount() {
		if (!this.props.track) {
			this.props.updateFilters({
				resource: 'tracks',
				id: this.props.id,
				isSingleTrack: true
			});
		}
	}

	render() {
		if (this.props.loadingFeed || !this.props.track) {
			return <Loading />;
		} else {
			return (
				<div className="container track-show">
					<TrackBanner
						track={this.props.track}
						playing={this.props.playing}
						trackLoaded={this.props.trackLoaded}
						playingTrackId={this.props.playingTrackId}
						handleTrackClick={this.props.handleTrackClick}
					>
						<FireLike {...this.props} />
					</TrackBanner>
					<CuratorList track={this.props.track} />
				</div>
			);
		}
	}
}

export default TrackShow;
