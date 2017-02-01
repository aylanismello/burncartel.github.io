import { connect } from 'react-redux';
import TrackShow from './track_show';
import { fetchTracks } from '../../actions/feed_actions';
import { getTracksHash } from '../../selectors/track_selector';

const mapStateToProps = (state, ownProps) => {
	const tracksHash = getTracksHash(state);
	const track = tracksHash[ownProps.params.id];

	return {
		id: ownProps.params.id,
		track
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchTrack: (id) => {
			fetchTracks({id});
		}
	};
};

export default connect(
	mapStateToProps,
	{}
)(TrackShow);
