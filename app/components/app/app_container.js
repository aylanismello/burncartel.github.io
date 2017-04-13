import { connect } from 'react-redux';
import App from './app';
import { fetchTracks } from '../../actions/feed_actions';
import { logoutCurrentUser, receiveCurrentUser } from '../../actions/user_actions';


const mapStateToProps = (state, ownProps) => ({
	feed: state.feed,
	filters: state.feed.filters,
	currentUser: state.user
});

const mapDispatchToProps = dispatch => ({
	fetchTracks: (filters) => dispatch(fetchTracks(filters)),
	logoutCurrentUser: () => dispatch(logoutCurrentUser()),
	receiveCurrentUser: (currentUser) => dispatch(receiveCurrentUser(currentUser))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
