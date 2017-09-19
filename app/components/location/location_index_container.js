import { connect } from 'react-redux';
import LocationIndex from './location_index';
import redirectOnLogout from '../hoc/redirect_on_logout';
import { updateFilters } from '../../actions/feed_actions';
const queryString = require('query-string');

const mapStateToProps = (state, ownProps) => {
	const query = queryString.parse(ownProps.location.search);
	const queryKey = Object.keys(query)[0];
	const formattedQuery = {};

	// cut off any extra params from url
	formattedQuery[queryKey] = query[queryKey];

	return {
		locations: state.feed.LOCATIONS.metadata,
		loadingFeed: state.feed.loadingFeed,
		query: formattedQuery
	};
};

const mapDispatchToProps = dispatch => ({
	updateFilters: filters => dispatch(updateFilters(filters))
});

export default connect(mapStateToProps, mapDispatchToProps)(redirectOnLogout(LocationIndex));
