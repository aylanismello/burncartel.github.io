import { connect } from 'react-redux';
import { updateFilters } from '../actions/feed_actions';
import UserItem from './user_item';


const mapStateToProps = (state, ownProps) => {
	return {
		user: ownProps.user
}};

const mapDispatchToProps = dispatch => ({
	handleUserChange: (userId) => {
		dispatch(updateFilters({curator: userId, sort: 'recent'}));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserItem);
