import { connect } from 'react-redux';
import Feed from './feed';
import { fetchTracks, updateTrackId, handleTrackClick } from '../../actions/feed_actions';
import { loginFB, likeUnlikeTrack } from '../../actions/user_actions';
import { getUserTracksHash } from '../../selectors/track_selector';

const mapStateToProps = (state, ownProps) => ({
	tracks: state.feed.tracks,
	elements: ownProps.elements,
	filters: state.feed.filters,
	loadingFeed: state.feed.loadingFeed,
	trackId: state.feed.trackId,
	playing: state.player.playing,
	trackLoaded: state.player.trackLoaded,
	userLikes: getUserTracksHash(state),
	isLoggedIn: ( state.user.currentUser.uid ? true : false)
});

const mapDispatchToProps = dispatch => ({
	fetchTracks: (filters, isNewpage) => dispatch(fetchTracks(filters, isNewpage)),
	handleTrackClick: (trackId) => {
		dispatch(handleTrackClick(trackId))
	},
	loginFB: () => dispatch(loginFB()),
	likeUnlikeTrack: (trackId) => dispatch(likeUnlikeTrack(trackId))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Feed);
