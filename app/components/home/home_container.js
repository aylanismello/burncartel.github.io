import { connect } from 'react-redux';
import { updateFilters } from '../../actions/feed_actions';
import Home from './home';


// how do i get rid of this obj without breaking everything?
const mapStateToProps = (state) => ({});

const mapDispatchToProps = dispatch => ({
	updateFilters: (filters) => dispatch(updateFilters(filters))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
