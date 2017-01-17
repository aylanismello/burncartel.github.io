import { connect } from 'react-redux';
import App from './app';
import { fetchTracks,
	updateFilter } from '../actions/feed_actions';


const mapStateToProps = (state, ownProps) => ({
	feed: state.feed,
	currentFilter: state.feed.currentFilter
});

const mapDispatchToProps = dispatch => ({
	fetchTracks: () => dispatch(fetchTracks()),
	updateFilter: (filter) => dispatch(updateFilter(filter))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
