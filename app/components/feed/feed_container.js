import { connect } from 'react-redux';
import Feed from './feed';
import {
	updateTrackId,
	handleTrackClick,
	paginateTracks
} from '../../actions/feed_actions';
import { loginFB, likeUnlikeTrack } from '../../actions/user_actions';
import { getUserTracksHash } from '../../selectors/track_selector';


// add userTracks here if we need to re-render their likes feed as they update it
const mapStateToProps = (state, ownProps) => ({
	canPaginate: state.feed.pagination.last_tracks_page !== state.feed.pagination.tracks_page,
	tracks: state.feed.focusedFeed.tracks,
	elements: ownProps.elements,
	filters: state.feed.filters,
	loadingFeed: state.feed.loadingFeed,
	trackId: state.feed.focusedFeed.trackId,
	playingTrackId: state.feed.playingFeed.trackId,
	playing: state.player.playing,
	trackLoaded: state.player.trackLoaded,
	userLikes: getUserTracksHash(state),
	isLoggedIn: ( state.user.currentUser.uid ? true : false),
	likePostInProgress: state.user.likePostInProgress,
	page: state.feed.pagination.tracks_page,
	nextPage: state.feed.pagination.new_tracks_page
});

const mapDispatchToProps = dispatch => ({
	handleTrackClick: (trackId, clickType = 'play') => {
		dispatch(handleTrackClick(trackId, clickType))

	},
	loginFB: () => dispatch(loginFB()),
	likeUnlikeTrack: (trackId) => dispatch(likeUnlikeTrack(trackId)),
	paginateTracks: () => dispatch(paginateTracks())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Feed);
