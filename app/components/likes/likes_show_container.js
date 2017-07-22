import { connect } from 'react-redux';
import {
	updateFilters,
 	setFeedType,
	setLikeFeedUserId,
	receiveTracks
} from '../../actions/feed_actions';
import LikesShow from './likes_show';


const mapStateToProps = (state, ownProps) => ({
		userLikes: state.user.currentUser.tracks,
		currentUserId: state.user.currentUser.id
	}
);

const mapDispatchToProps = dispatch => ({
	updateFilters: (filters) => dispatch(updateFilters(filters)),
	setFeedType: (feedType) => dispatch(setFeedType(feedType)),
	setLikeFeedUserId: (userId) => dispatch(setLikeFeedUserId(userId)),
	receiveTracks: (tracks) => dispatch(receiveTracks(tracks))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LikesShow);
