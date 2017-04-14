import { connect } from 'react-redux';
import { updateFilters } from '../../actions/feed_actions';
import LikesShow from './likes_show';


const mapStateToProps = (state, ownProps) => {
	debugger;
	if(ownProps.params.id === undefined) {
		console.log('SHIT WE DONT HAVE SOMEONE LOGGED IN');
	}

	return {

	}
};

const mapDispatchToProps = dispatch => ({
	updateFilters: () => dispatch(updateFilters())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LikesShow);
