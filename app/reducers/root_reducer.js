import { combineReducers } from 'redux';
import FeedReducer from './feed_reducer';
import PlayerReducer from './player_reducer';
import UserReducer from './user_reducer';

const RootReducer = combineReducers({
	feed: FeedReducer,
	player: PlayerReducer,
	user: UserReducer
});

export default RootReducer;
