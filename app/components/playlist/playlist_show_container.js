import { connect } from 'react-redux';
import { updateFilters } from '../../actions/feed_actions';
import PlaylistShow from './playlist_show';

// how do i get rid of this obj without breaking everything?
const mapStateToProps = (state, ownProps) => ({
	id: ownProps.match.params.id,
	playlist: state.feed.PLAYLISTS,
	tracksPage: state.feed.pagination.tracks_page,
	loadingFeed: state.feed.loadingFeed
});

const mapDispatchToProps = dispatch => ({
	updateFilters: filters => dispatch(updateFilters(filters))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);
