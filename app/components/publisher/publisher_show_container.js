import { connect } from 'react-redux';
import { updateFilters, setFeedType,  } from '../../actions/feed_actions';
import PublisherShow from './publisher_show';


// maybe use selectors here? this is weird.

const mapStateToProps = (state, ownProps) => ({
	id: ownProps.match.params.id,
	loadingFeed: state.feed.loadingFeed,
	publisher: state.feed.PUBLISHERS
});

const mapDispatchToProps = (dispatch) => ({
  updateFilters: (filters) => dispatch(updateFilters(filters)),
	setFeedType: (feedType) => dispatch(setFeedType(feedType))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PublisherShow);
