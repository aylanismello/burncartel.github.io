import { connect } from 'react-redux';
import {
	updateFilters,
 	setFeedType,
	setLikeFeedUserId,
	receiveTracks
} from '../../actions/feed_actions';
import UserHome from './user_home';


const mapStateToProps = (state, ownProps) => ({
	userLikes: state.user.currentUser.tracks,
	userName: state.user.currentUser.name,
	userPhoto: state.user.currentUser.photo_url,
	currentUserId: state.user.currentUser.id
});

const mapDispatchToProps = dispatch => ({
	updateFilters: (filters) => dispatch(updateFilters(filters)),
	setFeedType: (feedType) => dispatch(setFeedType(feedType)),
	setLikeFeedUserId: (userId) => dispatch(setLikeFeedUserId(userId)),
	receiveTracks: (tracks) => dispatch(receiveTracks(tracks))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserHome);
