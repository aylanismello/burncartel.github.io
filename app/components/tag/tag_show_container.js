import { connect } from 'react-redux';
import { updateFilters, setFeedType } from '../../actions/feed_actions';
import TagShow from './tag_show';

const mapStateToProps = (state, ownProps) => ({
	id: ownProps.match.params.id,
	tag: state.feed.TAGS,
	loadingFeed: state.feed.loadingFeed,
	tracksPage: state.feed.pagination.tracks_page
});

const mapDispatchToProps = dispatch => ({
	updateFilters: filters => dispatch(updateFilters(filters)),
	setFeedType: feedType => dispatch(setFeedType(feedType))
});

export default connect(mapStateToProps, mapDispatchToProps)(TagShow);
