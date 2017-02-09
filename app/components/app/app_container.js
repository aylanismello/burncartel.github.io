import { connect } from 'react-redux';
import App from './app';
import { fetchTracks } from '../../actions/feed_actions';


const mapStateToProps = (state, ownProps) => ({
	feed: state.feed,
	filters: state.feed.filters
});

const mapDispatchToProps = dispatch => ({
	fetchTracks: (filters) => dispatch(fetchTracks(filters))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
