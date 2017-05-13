import { connect } from 'react-redux';
import TrackShow from './track_show';
import {
  updateTrackId,
 	updateFilters,
  handleTrackClick
 } from '../../actions/feed_actions';
import { getFeedTracksHash, getUserTracksHash } from '../../selectors/track_selector';
import { likeUnlikeTrack } from '../../actions/user_actions';
import * as _ from 'lodash';

const mapStateToProps = (state, ownProps) => {
	const tracksHash = getFeedTracksHash(state);
	const track = tracksHash[ownProps.match.params.id];

	return {
    trackLoaded: state.player.trackLoaded,
    playing: state.player.playing,
    playingTrackId: state.feed.playingFeed.trackId,
		id: ownProps.match.params.id,
		track,
    isLoggedIn: ( state.user.currentUser.uid ? true : false),
    likePostInProgress: state.user.likePostInProgress,
    isLikedByUser: getUserTracksHash(state)[ownProps.match.params.id] === undefined ? false : true,
    trackId: ownProps.match.params.id
	};
};

const mapDispatchToProps = (dispatch) => ({
  updateFilters: (filters) => dispatch(updateFilters(filters)),
	updateTrackId: (id) => dispatch(updateTrackId(id)),
  handleTrackClick: (trackId, clickType = 'play') => {
		dispatch(handleTrackClick(trackId, clickType))
	},
  loginFB: () => dispatch(loginFB()),
  likeUnlikeTrack: (trackId) => dispatch(likeUnlikeTrack(trackId))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TrackShow);
