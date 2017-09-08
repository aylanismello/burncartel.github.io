import { connect } from 'react-redux';
import { updateFilters } from '../../actions/feed_actions';
import redirectOnLogout from '../hoc/redirect_on_logout';
import LikesShow from './likes_show';

const mapStateToProps = state => ({
	userLikes: state.user.currentUser.tracks,
	currentUserId: state.user.currentUser.id
});

const mapDispatchToProps = dispatch => ({
	updateFilters: filters => dispatch(updateFilters(filters))
});

export default connect(mapStateToProps, mapDispatchToProps)(
	redirectOnLogout(LikesShow, { requireLogin: true })
);
