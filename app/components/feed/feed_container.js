import { connect } from 'react-redux';
import Feed from './feed';
import { fetchTracks, updateTrackId, handleTrackClick } from '../../actions/feed_actions';

const mapStateToProps = (state, ownProps) => ({
	tracks: state.feed.tracks,
	elements: ownProps.elements,
	filters: state.feed.filters,
	loadingFeed: state.feed.loadingFeed,
	trackId: state.feed.trackId,
	playing: state.player.playing
});

const mapDispatchToProps = dispatch => ({
	fetchTracks: () => dispatch(fetchTracks()),
	handleTrackClick: (trackId) => {
		dispatch(handleTrackClick(trackId))
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Feed);
