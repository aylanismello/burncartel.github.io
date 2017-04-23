import { connect } from 'react-redux';
import App from './app';
import { fetchTracks } from '../../actions/feed_actions';
import {
	logoutCurrentUser,
	receiveCurrentUser,
 	initFB,
 	loginFB
} from '../../actions/user_actions';


const mapStateToProps = (state, ownProps) => ({
	feed: state.feed.focusedFeed,
	filters: state.feed.focusedFeed.filters,
	currentUser: state.user.currentUser,
	fbDidInit: state.user.fbDidInit,
	feedType: state.feed.focusedFeed.feedType
});

const mapDispatchToProps = dispatch => ({
	fetchTracks: (filters) => dispatch(fetchTracks(filters)),
	logoutCurrentUser: () => dispatch(logoutCurrentUser()),
	receiveCurrentUser: (currentUser) => dispatch(receiveCurrentUser(currentUser)),
	initFB: () => dispatch(initFB()),
	loginFB: () => dispatch(loginFB())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
