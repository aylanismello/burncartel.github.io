import { connect } from 'react-redux';
import { updateFilters, receiveTracks } from '../../actions/feed_actions';
import TravelerShow from './traveler_show';

const queryString = require('query-string');

const mapStateToProps = (state, ownProps) => {
	const query = queryString.parse(ownProps.location.search);
	const queryKey = Object.keys(query)[0];
	const formattedQuery = {};

	// cut off any extra params from url
	formattedQuery[queryKey] = query[queryKey];
	return {
		formattedQuery
	};
};

const mapDispatchToProps = dispatch => ({
	updateFilters: filters => dispatch(updateFilters(filters)),
	setFeedType: feedType => dispatch(setFeedType(feedType)),
	receiveTracks: tracks => dispatch(receiveTracks(tracks))
});

export default connect(mapStateToProps, mapDispatchToProps)(TravelerShow);
