import { connect } from 'react-redux';
import { updateTrackIdx } from '../actions/feed_actions';
import { getUserFromTracks } from '../selectors/user_selector';
import UserShow from './user_show';

// maybe use selectors here? this is weird.
const mapStateToProps = (state, ownProps) => {
	return {
		id: ownProps.params.id,
		user: getUserFromTracks(state)
	}
};

const mapDispatchToProps = dispatch => ({
	updateTrackIdx: (userIdx) => dispatch(updateTrackIdx(userIdx))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserShow);
