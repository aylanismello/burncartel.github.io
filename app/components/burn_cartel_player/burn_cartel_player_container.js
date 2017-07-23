import { connect } from 'react-redux';
import * as _ from 'lodash';

import BurnCartelPlayer from './burn_cartel_player';
import {
	updateTrackId,
	updatePlayingTrackId
} from '../../actions/feed_actions';
import {
	togglePlay,
	setTrackLoaded,
	setTrackNotLoaded,
	updateCurrentTime,
	toggleRepeat,
	toggleShuffle,
	reshuffleTracks
} from '../../actions/player_actions';
import { loginFB, likeUnlikeTrack } from '../../actions/user_actions';
import {
	getPlayingFeedTracksHash,
	getPlayingFeedTracksHashRandom,
	getNextTrackId,
	getPrevTrackId,
	getUserTracksHash,
	getRandomTrackId
} from '../../selectors/track_selector';


let shuffledTracks;

const mapStateToProps = state => {
	const tracksHash = getPlayingFeedTracksHash(state);
	// const tracksHashRandom = getPlayingFeedTracksHashRandom(state);


	const track = tracksHash[state.feed.playingFeed.trackId];
	const nextTrackId = getNextTrackId(state);
	const prevTrackId = getPrevTrackId(state);

	const publisherId = track === undefined ? '' : track.publisher_id;

	return {
		// replace this with reading from .env ? it could be sniffed from the network traffic anyhow... hmm...
		generateRandomTrackId: () => {
			return getRandomTrackId(state);
		},
		feedName: state.feed.playingFeed.feedName,
		clientId: '282558e0e8cdcd8a9b3ba2b4917596b7',
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
		isLoggedIn: state.user.currentUser.uid ? true : false,
		likePostInProgress: state.user.likePostInProgress,
		userLikes: getUserTracksHash(state)
	};
};

const mapDispatchToProps = dispatch => ({
	updateTrackId: id => {
		dispatch(updatePlayingTrackId(id));
	},
	shuffledTracks: () => {
		dispatch(reshuffleTracks())
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
