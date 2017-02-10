import { connect } from 'react-redux';
import { updateFilters, setBcFeed } from '../../actions/feed_actions';
import BurnCartelCurated from './burn_cartel_curated';

// how do i get rid of this obj without breaking everything?
const mapStateToProps = (state) => ({});

const mapDispatchToProps = dispatch => ({
	setBcFeed: () => dispatch(setBcFeed())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BurnCartelCurated);
