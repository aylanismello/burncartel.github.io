import { connect } from 'react-redux';
import {
	updateFilters,
	setFeedType
 } from '../../actions/feed_actions';
import Home from './home';


// how do i get rid of this obj without breaking everything?
const mapStateToProps = (state, ownProps) => ({
	pathname: ownProps.history.location.pathname
});

const mapDispatchToProps = dispatch => ({
	updateFilters: (filters) => dispatch(updateFilters(filters)),
	setFeedType: (feedType) => dispatch(setFeedType(feedType)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
