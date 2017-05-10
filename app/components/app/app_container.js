import { connect } from 'react-redux';
import App from './app';
import {
	fetchFeed
 } from '../../actions/feed_actions';
import {
	logoutCurrentUser,
	receiveCurrentUser,
 	initFB,
 	loginFB
} from '../../actions/user_actions';
import { getPlayingFeedTracksHash } from '../../selectors/track_selector';



const mapStateToProps = (state, ownProps) => ({
	feed: state.feed.focusedFeed,
	filters: state.feed.filters,
	currentUser: state.user.currentUser,
	fbDidInit: state.user.fbDidInit,
	feedType: state.feed.feedType,
	trackUrl: state.feed.playingFeed.trackId ? getPlayingFeedTracksHash(state)[state.feed.playingFeed.trackId].permalink_url : '#'
});

const mapDispatchToProps = dispatch => ({
	fetchFeed: (filters) => dispatch(fetchFeed(filters)),
	logoutCurrentUser: () => dispatch(logoutCurrentUser()),
	receiveCurrentUser: (currentUser) => dispatch(receiveCurrentUser(currentUser)),
	initFB: () => dispatch(initFB()),
	loginFB: () => dispatch(loginFB())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
