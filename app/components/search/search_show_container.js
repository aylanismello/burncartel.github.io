import { connect } from 'react-redux';
import SearchShow from './search_show';
import { updateFilters } from '../../actions/feed_actions';

const mapStateToProps = (state, ownProps) => ({
	q: ownProps.location.search.match(/q=[a-z0-9]*[&]?/)[0].slice(2, ownProps.location.search.length),
	loadingFeed: state.feed.loadingFeed,
	tracksPage: state.feed.pagination.tracks_page
});

const mapDispatchToProps = dispatch => ({
	updateFilters: filters => dispatch(updateFilters(filters))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchShow);
