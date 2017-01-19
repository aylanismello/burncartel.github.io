import { connect } from 'react-redux';
import { updateTrackIdx } from '../actions/feed_actions';
import TrackShow from './track_show';


const mapStateToProps = (state, ownProps) => ({
	track: state.feed.tracks[state.feed.trackIdx]
});

const mapDispatchToProps = dispatch => ({
	updateTrackIdx: (trackIdx) => dispatch(updateTrackIdx(trackIdx))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TrackShow);
