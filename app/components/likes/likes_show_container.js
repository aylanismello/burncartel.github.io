import { connect } from 'react-redux';
import {
	updateFilters,
 	setFeedType,
	setLikeFeedUserId,
	receiveTracks
} from '../../actions/feed_actions';
import LikesShow from './likes_show';


const mapStateToProps = (state, ownProps) => {
	if(ownProps.match.params.id === undefined) {
		console.log('we do not have the necessary param.');
		// TODO: return 404!
	}

	const userId = ownProps.match.params.id;
	const isOfCurrentUser = ( userId === "me" ? true : false);

	return {
		ffUserId: ownProps.match.params.id,
		userLikes: state.user.currentUser.tracks,
		isOfCurrentUser,
		currentUserId: state.user.currentUser.id
	}
};

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
