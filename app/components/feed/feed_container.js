import { connect } from 'react-redux';
import Feed from './feed';
import { fetchTracks, updateTrackId, handleTrackClick } from '../../actions/feed_actions';
import { loginFB } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
	tracks: state.feed.tracks,
	elements: ownProps.elements,
	filters: state.feed.filters,
	loadingFeed: state.feed.loadingFeed,
	trackId: state.feed.trackId,
	playing: state.player.playing,
	trackLoaded: state.player.trackLoaded,
	isLoggedIn: ( state.user.currentUser.uid ? true : false)
});

const mapDispatchToProps = dispatch => ({
	fetchTracks: (filters, isNewpage) => dispatch(fetchTracks(filters, isNewpage)),
	handleTrackClick: (trackId) => {
		dispatch(handleTrackClick(trackId))
	},
	loginFB: () => dispatch(loginFB())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Feed);
