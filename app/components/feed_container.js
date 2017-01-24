import { connect } from 'react-redux';
import Feed from './feed';
import { fetchTracks, updateTrackIdx, updateTrackId } from '../actions/feed_actions';

const mapStateToProps = (state, ownProps) => ({
	tracks: state.feed.tracks,
	elements: ownProps.elements,
	filters: state.feed.filters,
	loadingFeed: state.feed.loadingFeed
});

const mapDispatchToProps = dispatch => ({
	fetchTracks: () => dispatch(fetchTracks()),
	handleTrackUpdate: (trackId) => dispatch(updateTrackId(trackId))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Feed);
