import { connect } from 'react-redux';
import {
	updateFilters,
 	setFeedType,
	setLikesUser
} from '../../actions/feed_actions';
import LikesShow from './likes_show';


const mapStateToProps = (state, ownProps) => {
	if(ownProps.match.params.id === undefined) {
		console.log('we do not have the necessary param.');
		// TODO: return 404!
	}

	return {
		ffUserId: ownProps.match.params.id,
		userLikes: state.user.currentUser.tracks,
		location: ownProps.location

	}
};

const mapDispatchToProps = dispatch => ({
	updateFilters: () => dispatch(updateFilters()),
	setFeedType: (feedType) => dispatch(setFeedType(feedType)),
	setLikesUser: (userId) => dispatch(setLikesUser(userId))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LikesShow);
