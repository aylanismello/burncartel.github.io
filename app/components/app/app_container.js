import { connect } from 'react-redux';
import App from './app';
import { fetchFeed } from '../../actions/feed_actions';
import {
	logoutCurrentUser,
	receiveCurrentUser,
	initFB,
	loginFB
} from '../../actions/user_actions';
import { togglePlay } from '../../actions/player_actions';
import { getPlayingFeedTracksHash } from '../../selectors/track_selector';

const mapStateToProps = (state) => {
	const feedTracksHash = getPlayingFeedTracksHash(state);

	const trackUrl = state.feed.playingFeed.trackId &&
		Object.keys(feedTracksHash).length > 0
		? feedTracksHash[state.feed.playingFeed.trackId].permalink_url
		: '#';

	return {
		feed: state.feed.focusedFeed,
		playerInitialized: state.player.playerInitialized,
		filters: state.feed.filters,
		currentUser: state.user.currentUser,
		fbDidInit: state.user.fbDidInit,
		feedType: state.feed.feedType,
		trackUrl
	};
};

const mapDispatchToProps = dispatch => ({
	fetchFeed: filters => dispatch(fetchFeed(filters)),
	logoutCurrentUser: () => dispatch(logoutCurrentUser()),
	receiveCurrentUser: currentUser => dispatch(receiveCurrentUser(currentUser)),
	initFB: () => dispatch(initFB()),
	loginFB: () => dispatch(loginFB()),
	togglePlay: () => dispatch(togglePlay())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
