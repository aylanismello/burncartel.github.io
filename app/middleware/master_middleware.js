import { applyMiddleware } from 'redux';
import FeedMiddleware from './feed_middleware';
import PlayerMiddleware from './player_middleware';
import UserMiddleware from './user_middleware';
import TravelerMiddleware from './traveler_middleware';

const myMiddlewares = [
	FeedMiddleware,
	PlayerMiddleware,
	UserMiddleware,
	TravelerMiddleware
];

const masterMiddleware = applyMiddleware(...myMiddlewares);

export default masterMiddleware;
