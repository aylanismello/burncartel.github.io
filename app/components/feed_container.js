import { connect } from 'react-redux';
import Feed from './feed';
import { fetchTracks, updateTrackIdx, updateTrackId } from '../actions/feed_actions';

const mapStateToProps = (state, ownProps) => ({
	tracks: state.feed.tracks,
	elements: ownProps.elements
});

const mapDispatchToProps = dispatch => ({
	fetchTracks: () => dispatch(fetchTracks()),
	// handleTrackUpdate: (trackIdx) => dispatch(updateTrackIdx(trackIdx)),
	handleTrackUpdate: (trackId) => dispatch(updateTrackId(trackId))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Feed);
