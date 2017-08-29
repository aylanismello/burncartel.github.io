import { connect } from 'react-redux';
import { updateFilters, receiveTracks } from '../../actions/feed_actions';
import TravelerShow from './traveler_show';

const queryString = require('query-string');

const mapStateToProps = (state, ownProps) => {
	// const query = queryString.parse(ownProps.location.search);
	// const queryKey = Object.keys(query)[0];
	// const formattedQuery = {};
	//
	// cut off any extra params from url
	// formattedQuery[queryKey] = query[queryKey];
	return {
		id: ownProps.match.params.id,
		location: state.feed.LOCATIONS,
		tracksPage: state.feed.pagination.tracks_page,
		loadingFeed: state.feed.loadingFeed
	};
};

const mapDispatchToProps = dispatch => ({
	updateFilters: filters => dispatch(updateFilters(filters)),
	receiveTracks: tracks => dispatch(receiveTracks(tracks))
});

export default connect(mapStateToProps, mapDispatchToProps)(TravelerShow);
