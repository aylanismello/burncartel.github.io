import { connect } from 'react-redux';
import { updateUserId, updateFilters } from '../actions/feed_actions';
import Home from './home';

const mapStateToProps = (state, ownProps) => ({
	tracks: state.feed.tracks
});

const mapDispatchToProps = dispatch => ({
	updateFilters: (filters) => dispatch(updateFilters(filters))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
