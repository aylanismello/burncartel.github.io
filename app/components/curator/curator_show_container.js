import { connect } from 'react-redux';
import { getCuratorFromTracks } from '../../selectors/curator_selector';
import { updateFilters, setFeedType } from '../../actions/feed_actions';
import CuratorShow from './curator_show';


// maybe use selectors here? this is weird.


const mapStateToProps = (state, ownProps) => {
	return{
	id: ownProps.match.params.id,
	curator: getCuratorFromTracks(state)
}};

const mapDispatchToProps = (dispatch) => ({
  updateFilters: (filters) => dispatch(updateFilters(filters)),
	setFeedType: (feedType) => dispatch(setFeedType(feedType))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CuratorShow);
