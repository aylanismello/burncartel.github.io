import { connect } from 'react-redux';
import { getUserFromTracks } from '../../selectors/user_selector';
import { updateFilters } from '../../actions/feed_actions';
import UserShow from './user_show';


// maybe use selectors here? this is weird.
const mapStateToProps = (state, ownProps) => {
	return {
		id: ownProps.match.params.id,
		user: getUserFromTracks(state)
	};
};

const mapDispatchToProps = (dispatch) => ({
  updateFilters: (filters) => dispatch(updateFilters(filters))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserShow);
