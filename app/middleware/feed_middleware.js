import { feedConstants, receiveTracks } from '../actions/feed_actions';
import { getTracks } from '../util/bc_api';

const FeedMiddleware = ({ getState, dispatch }) => next => action => {
	switch(action.type) {
		case feedConstants.FETCH_TRACKS:
			getTracks((tracks) => {
				console.log(`received ${tracks}`);
				dispatch(receiveTracks(tracks));
			}, (error) => {
				console.log(`fucekd up n got ${errir}`);
			});
			return next(action);
		default:
			return next(action);
	}
};

export default FeedMiddleware;
