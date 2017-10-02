import { connect } from 'react-redux';
import SearchShow from './search_show';
import { updateFilters } from '../../actions/feed_actions';
import queryString from 'query-string';

const mapStateToProps = (state, ownProps) => {
	const { q, resource_type } = queryString.parse(ownProps.location.search);

	return {
		q,
		resource_type,
		loadingFeed: state.feed.loadingFeed,
		tracksPage: state.feed.pagination.tracks_page,
		hasSearchResults: state.feed.SEARCH.hasSearchResults
	};
};

const mapDispatchToProps = dispatch => ({
	updateFilters: filters => dispatch(updateFilters(filters))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchShow);
