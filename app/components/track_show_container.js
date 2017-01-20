import { connect } from 'react-redux';
import { updateUserId } from '../actions/feed_actions';
import TrackShow from './track_show';


const mapStateToProps = (state, ownProps) => {
	return {
		id: ownProps.params.id,
		tracks: state.feed.tracks,

}};

const mapDispatchToProps = dispatch => ({
	updateUserId: (userId) => dispatch(updateUserId(userId))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TrackShow);
