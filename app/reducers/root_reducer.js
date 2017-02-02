import { combineReducers } from 'redux';
import FeedReducer from './feed_reducer';
import PlayerReducer from './player_reducer';

const RootReducer = combineReducers({
  feed: FeedReducer,
  player: PlayerReducer
});

export default RootReducer;
