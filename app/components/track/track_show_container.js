import { connect } from 'react-redux';
import TrackShow from './track_show';
import { updateTrackId,
 	updateFilters } from '../../actions/feed_actions';
import { getTracksHash } from '../../selectors/track_selector';

const mapStateToProps = (state, ownProps) => {
	const tracksHash = getTracksHash(state);
	const track = tracksHash[ownProps.params.id];

	return {
		id: ownProps.params.id,
		track
	};
};

const mapDispatchToProps = (dispatch) => ({
	// fetchTracks: (filters) => dispatch(fetchTracks(filters)),
  updateFilters: (filters) => dispatch(updateFilters(filters)),
	updateTrackId: (id) => dispatch(updateTrackId(id))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TrackShow);
