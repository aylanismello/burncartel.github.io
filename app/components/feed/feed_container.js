import { connect } from 'react-redux';
import Feed from './feed';
import {
	fetchTracks,
	updateTrackId,
	handleTrackClick,
	paginateTracks
} from '../../actions/feed_actions';
import { loginFB, likeUnlikeTrack } from '../../actions/user_actions';
import { getUserTracksHash } from '../../selectors/track_selector';


// add userTracks here if we need to re-render their likes feed as they update it
const mapStateToProps = (state, ownProps) => ({
	tracks: state.feed.focusedFeed.tracks,
	elements: ownProps.elements,
	filters: state.feed.focusedFeed.filters,
	loadingFeed: state.feed.focusedFeed.loadingFeed,
	trackId: state.feed.focusedFeed.trackId,
	playing: state.player.playing,
	trackLoaded: state.player.trackLoaded,
	userLikes: getUserTracksHash(state),
	isLoggedIn: ( state.user.currentUser.uid ? true : false),
	likePostInProgress: state.user.likePostInProgress,
	page: state.feed.focusedFeed.page
});

const mapDispatchToProps = dispatch => ({
	fetchTracks: (filters, isNewpage) => dispatch(fetchTracks(filters, isNewpage)),
	handleTrackClick: (trackId) => {
		dispatch(handleTrackClick(trackId))
	},
	loginFB: () => dispatch(loginFB()),
	likeUnlikeTrack: (trackId) => dispatch(likeUnlikeTrack(trackId)),
	paginateTracks: () => dispatch(paginateTracks())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Feed);
