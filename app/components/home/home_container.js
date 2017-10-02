import { connect } from 'react-redux';
import { updateFilters, setFeedType } from '../../actions/feed_actions';
import { getPlaylistsHash } from '../../selectors/playlist_selector';
import Home from './home';

const mapStateToProps = (state, ownProps) => ({
	pathname: ownProps.history.location.pathname,
	playlists: state.feed.EXPLORE ? getPlaylistsHash(state) : null,
	loadingFeed: state.feed.loadingFeed
});

const mapDispatchToProps = dispatch => ({
	updateFilters: filters => dispatch(updateFilters(filters)),
	setFeedType: feedType => dispatch(setFeedType(feedType))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
