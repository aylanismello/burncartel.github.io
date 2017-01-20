import { connect } from 'react-redux';
import { updateTrackIdx } from '../actions/feed_actions';
import TrackShow from './track_show';


const mapStateToProps = (state, ownProps) => {
	return {
		id: ownProps.params.id,
		tracks: state.feed.tracks
}};

const mapDispatchToProps = dispatch => ({
	updateTrackIdx: (trackIdx) => dispatch(updateTrackIdx(trackIdx))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TrackShow);
