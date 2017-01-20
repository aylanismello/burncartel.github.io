import { connect } from 'react-redux';
import { updateUserId } from '../actions/feed_actions';
import UserItem from './user_item';


const mapStateToProps = (state, ownProps) => {
	return {
		user: ownProps.user
}};

const mapDispatchToProps = dispatch => ({
	handleUserChange: (userId) => dispatch(updateUserId(userId))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserItem);
