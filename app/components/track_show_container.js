import { connect } from 'react-redux';
import TrackShow from './track_show';


const mapStateToProps = (state, ownProps) => {
	return {
		id: ownProps.params.id,
		tracks: state.feed.tracks,

}};


export default connect(
	mapStateToProps,
	{}
)(TrackShow);
