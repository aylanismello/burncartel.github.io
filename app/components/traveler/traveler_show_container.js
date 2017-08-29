import { connect } from 'react-redux';
import { updateFilters, receiveTracks } from '../../actions/feed_actions';
import TravelerShow from './traveler_show';

const mapStateToProps = (state, ownProps) => {
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
