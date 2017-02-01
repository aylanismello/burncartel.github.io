import { connect } from 'react-redux';
import BurnCartelPlayer from './burn_cartel_player';
import { getTracksHash } from '../../selectors/track_selector';


const mapStateToProps = (state) => {

	const tracksHash = getTracksHash(state);
	const track = tracksHash[state.feed.trackId];

	return {
		clientId: "282558e0e8cdcd8a9b3ba2b4917596b7",
		track,
		trackId: state.feed.trackId
	};
};


export default connect(
	mapStateToProps,
	{}
)(BurnCartelPlayer);
