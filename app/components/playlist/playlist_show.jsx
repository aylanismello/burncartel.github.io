import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../shared/loading';
import FeedContainer from '../feed/feed_container';
import PlaylistBanner from './playlist_banner';

class PlaylistShow extends Component {
	componentWillMount() {
		this.props.updateFilters({
			resource: 'playlists',
			id: this.props.id
		});

		this.state = {
			loadingAnotherPlaylist: false
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.id !== this.props.id) {
			this.setState({ loadingAnotherPlaylist: true });
			this.props.updateFilters({ resource: 'playlists', id: nextProps.id });
		}

		if (this.props.loadingFeed && !nextProps.loadingFeed) {
			this.setState({ loadingAnotherPlaylist: false });
		}
	}

	render() {
		if (
			(this.props.loadingFeed && !this.props.tracksPage) ||
			this.state.loadingAnotherPlaylist
		) {
			return <Loading />;
		} else {
			return (
				<div className="container user-show track-show">
					<PlaylistBanner {...this.props.playlist} />
					<FeedContainer />
				</div>
			);
		}
	}
}

const { func, string, objectOf, number, bool } = PropTypes;

PlaylistShow.propTypes = {
	updateFilters: func.isRequired,
	pathname: string.isRequired,
	id: number.isRequired,
	playlist: objectOf(objectOf(string)).isRequired,
	loadingFeed: bool.isRequired
};

export default PlaylistShow;
