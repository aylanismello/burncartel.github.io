import { connect } from 'react-redux';
import App from './app';
import { fetchTracks } from '../actions/feed_actions';

const mapStateToProps = (state, ownProps) => ({
	feed: state.feed
});

const mapDispatchToProps = dispatch => ({
	fetchTracks: () => dispatch(fetchTracks())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
