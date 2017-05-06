import { connect } from 'react-redux';
import TrackShow from './track_show';
import {
  updateTrackId,
 	updateFilters,
  handleTrackClick
 } from '../../actions/feed_actions';
import { getFeedTracksHash } from '../../selectors/track_selector';
import * as _ from 'lodash';

const mapStateToProps = (state, ownProps) => {
	const tracksHash = getFeedTracksHash(state);
	const track = tracksHash[ownProps.match.params.id];

	return {
    trackLoaded: state.player.trackLoaded,
    playing: state.player.playing,
    playingTrackId: state.feed.playingFeed.trackId,
		id: ownProps.match.params.id,
		track
	};
};

const mapDispatchToProps = (dispatch) => ({
  updateFilters: (filters) => dispatch(updateFilters(filters)),
	updateTrackId: (id) => dispatch(updateTrackId(id)),
  handleTrackClick: (trackId, clickType = 'play') => {
		dispatch(handleTrackClick(trackId, clickType))
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TrackShow);
