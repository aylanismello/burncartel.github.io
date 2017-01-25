import { connect } from 'react-redux';
import { getUserFromTracks } from '../selectors/user_selector';
import UserShow from './user_show';

// maybe use selectors here? this is weird.
const mapStateToProps = (state, ownProps) => {
	return {
		id: ownProps.params.id,
		user: getUserFromTracks(state)
	}
};

export default connect(
	mapStateToProps,
	{}
)(UserShow);
