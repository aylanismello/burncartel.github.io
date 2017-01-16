import { combineReducers } from 'redux';
import FeedReducer from './feed_reducer';

const RootReducer = combineReducers({
  feed: FeedReducer
});

export default RootReducer;
