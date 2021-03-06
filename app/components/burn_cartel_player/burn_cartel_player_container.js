import { connect } from 'react-redux';
import BurnCartelPlayer from './burn_cartel_player';
import { updatePlayingTrackId } from '../../actions/feed_actions';
import {
	togglePlay,
	setTrackLoaded,
	setTrackNotLoaded,
	updateCurrentTime,
	toggleRepeat,
	toggleShuffle
} from '../../actions/player_actions';
import { loginFB, likeUnlikeTrack } from '../../actions/user_actions';
import {
	getPlayingFeedTracksHash,
	getPlayingFeedTracksHashShuffled,
	getNextTrackId,
	getPrevTrackId,
	getNextTrackIdShuffled,
	getPrevTrackIdShuffled,
	getUserTracksHash
} from '../../selectors/track_selector';
import { ENV } from '../../util/helpers';

const mapStateToProps = (state) => {
	let tracksHash, track, nextTrackId, prevTrackId;

	if (!state.player.shuffle) {
		tracksHash = getPlayingFeedTracksHash(state);
		track = tracksHash[state.feed.playingFeed.trackId];
		nextTrackId = getNextTrackId(state);
		prevTrackId = getPrevTrackId(state);
	} else {
		tracksHash = getPlayingFeedTracksHashShuffled(state);
		track = tracksHash[state.feed.playingFeed.trackId];
		nextTrackId = getNextTrackIdShuffled(state);
		prevTrackId = getPrevTrackIdShuffled(state);
	}

	const publisherId = track === undefined ? '' : track.publisher_id;

	return {
		// replace this with reading from .env ? it could be sniffed from the network traffic anyhow... hmm...
		feedName: state.feed.playingFeed.feedName,
		clientId: ENV.clientId,
		track,
		publisherId,
		trackLoaded: state.player.trackLoaded,
		trackId: state.feed.playingFeed.trackId,
		nextTrackId,
		prevTrackId,
		playing: state.player.playing,
		repeating: state.player.repeating,
		shuffle: state.player.shuffle,
		currentTime: state.player.currentTime,
		filters: state.feed.playingFeed.filters,
		playerInitialized: state.player.playerInitialized,
		isLoggedIn: !!state.user.currentUser.uid,
		likePostInProgress: state.user.likePostInProgress,
		userLikes: getUserTracksHash(state)
	};
};

const mapDispatchToProps = dispatch => ({
	updateTrackId: (id) => {
		dispatch(updatePlayingTrackId(id));
	},
	togglePlay: () => dispatch(togglePlay()),
	toggleRepeat: () => dispatch(toggleRepeat()),
	toggleShuffle: () => dispatch(toggleShuffle()),
	setTrackLoaded: () => dispatch(setTrackLoaded()),
	setTrackNotLoaded: () => dispatch(setTrackNotLoaded()),
	updateCurrentTime: currentTime => dispatch(updateCurrentTime(currentTime)),
	likeUnlikeTrack: trackId => dispatch(likeUnlikeTrack(trackId)),
	loginFB: () => dispatch(loginFB())
});

export default connect(mapStateToProps, mapDispatchToProps)(BurnCartelPlayer);
