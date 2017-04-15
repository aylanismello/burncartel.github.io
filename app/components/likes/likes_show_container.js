import { connect } from 'react-redux';
import { updateFilters } from '../../actions/feed_actions';
import LikesShow from './likes_show';


const mapStateToProps = (state, ownProps) => {
	// if(state.user.currentUser.id === undefined) {
	// 	console.log('SHIT WE DONT HAVE SOMEONE LOGGED IN');
	// }

	if(ownProps.params.id === undefined) {
		console.log('we do not have the necessary param.');
		// TODO: return 404!
	}




	return {
		ffUserId: ownProps.params.id
	}
};

const mapDispatchToProps = dispatch => ({
	updateFilters: () => dispatch(updateFilters())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LikesShow);
