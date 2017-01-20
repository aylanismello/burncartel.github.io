import { connect } from 'react-redux';
import { updateTrackIdx } from '../actions/feed_actions';
import { getUserFromTracks } from '../selectors/user_selector';
import UserShow from './user_show';

// maybe use selectors here? this is weird.
const mapStateToProps = (state, ownProps) => {

	const uzer = getUserFromTracks(state);
	const userId = ownProps.params.id

	let user;
	// not optimal, this will NOT exit when we found out user.
	const { tracks } = state.feed;
	const keys = Object.keys(tracks);

	keys.forEach((track) => {
		tracks[track].curators.forEach((curator) => {
			if(`${curator.id}` === `${userId}`) {
				user = curator;
			}
		});
	});

	return {
		id: ownProps.params.id,
		user
	}
};

const mapDispatchToProps = dispatch => ({
	updateTrackIdx: (userIdx) => dispatch(updateTrackIdx(userIdx))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserShow);
