import { connect } from 'react-redux';
import Feed from './feed';
import { fetchTracks, updateTrackIdx } from '../actions/feed_actions';

const mapStateToProps = (state, ownProps) => ({
	tracks: state.feed.tracks,
	elements: ownProps.elements
});

const mapDispatchToProps = dispatch => ({
	fetchTracks: () => dispatch(fetchTracks()),
	handleTrackUpdate: (trackIdx) => dispatch(updateTrackIdx(trackIdx))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Feed);
