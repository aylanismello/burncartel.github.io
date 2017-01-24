import { feedConstants,
	receiveTracks,
 	loadingStart,
	loadingStop
} from '../actions/feed_actions';
import { getTracks } from '../util/bc_api';

const FeedMiddleware = ({ getState, dispatch }) => next => action => {
	switch(action.type) {
		case feedConstants.FETCH_TRACKS:
			dispatch(loadingStart());
			
			getTracks(action.filters, (tracks) => {
				dispatch(loadingStop());
				dispatch(receiveTracks(tracks));
			}, (error) => {
				// make error reducer here
				console.log(`ERROR FETCHING TRACKS: got ${error}`);
			});
			return next(action);
		default:
			return next(action);
	}
};

export default FeedMiddleware;
