import { connect } from 'react-redux';
import BurnCartelPlayer from './burn_cartel_player';
import { updateTrackId } from '../../actions/feed_actions';
import { togglePlay,
	setTrackLoaded,
	setTrackNotLoaded,
	updateCurrentTime,
 	toggleRepeat } from '../../actions/player_actions';
import { getTracksHash, getNextTrackId } from '../../selectors/track_selector';


const mapStateToProps = (state) => {

	const tracksHash = getTracksHash(state);
	const track = tracksHash[state.feed.trackId];
	const nextTrackId = getNextTrackId(state);

	// console.log(`next track id is ${nextTrackId}`);
	// replace this with reading from .env

	return {
		clientId: "282558e0e8cdcd8a9b3ba2b4917596b7",
		track,
		trackLoaded: state.player.trackLoaded,
		trackId: state.feed.trackId,
		nextTrackId,
		playing: state.player.playing,
		repeating: state.player.repeating,
		currentTime: state.player.currentTime
	};
};

const mapDispatchToProps = (dispatch) => ({
	updateTrackId: (id) => dispatch(updateTrackId(id)),
	togglePlay: () => dispatch(togglePlay()),
	toggleRepeat: () => dispatch(toggleRepeat()),
	setTrackLoaded: () => dispatch(setTrackLoaded()),
	setTrackNotLoaded: () => dispatch(setTrackNotLoaded()),
	updateCurrentTime: (currentTime) => dispatch(updateCurrentTime(currentTime))

});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BurnCartelPlayer);
