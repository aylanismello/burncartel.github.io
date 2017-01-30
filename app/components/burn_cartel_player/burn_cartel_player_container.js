import { connect } from 'react-redux';
import BurnCartelPlayer from './burn_cartel_player';

const mapStateToProps = (state, ownProps) => ({
	clientId: "282558e0e8cdcd8a9b3ba2b4917596b7",
	tracks: state.feed.tracks,
	trackId: state.feed.trackId
});


export default connect(
	mapStateToProps,
	{}
)(BurnCartelPlayer);
