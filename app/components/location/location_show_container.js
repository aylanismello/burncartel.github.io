import { connect } from 'react-redux';
import { updateFilters } from '../../actions/feed_actions';
import redirectOnLogout from '../hoc/redirect_on_logout';
import LocationShow from './location_show';

const mapStateToProps = (state, ownProps) => {
	return {
		id: ownProps.match.params.id,
		location: state.feed.LOCATIONS,
		tracksPage: state.feed.pagination.tracks_page,
		loadingFeed: state.feed.loadingFeed
	};
};

const mapDispatchToProps = dispatch => ({
	updateFilters: filters => dispatch(updateFilters(filters))
});

export default connect(mapStateToProps, mapDispatchToProps)(redirectOnLogout(LocationShow));
