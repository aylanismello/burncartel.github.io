import { connect } from 'react-redux';
import {
	updateFilters,
	setFeedType,
	setLikeFeedUserId,
	receiveTracks,
	resetPersonalFeed
} from '../../actions/feed_actions';
import UserFeedShow from './user_feed_show';
import redirectOnLogout from '../hoc/redirect_on_logout';


const mapStateToProps = (state, ownProps) => ({
	userLikes: state.user.currentUser.tracks,
	userName: state.user.currentUser.name,
	currentUserId: state.user.currentUser.id
});

const mapDispatchToProps = dispatch => ({
	updateFilters: (filters) => dispatch(updateFilters(filters)),
	setFeedType: (feedType) => dispatch(setFeedType(feedType)),
	setLikeFeedUserId: (userId) => dispatch(setLikeFeedUserId(userId)),
	receiveTracks: (tracks) => dispatch(receiveTracks(tracks)),
	resetPersonalFeed: () => dispatch(resetPersonalFeed())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(redirectOnLogout(UserFeedShow, { requireLogin: true }));
