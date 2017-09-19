import { applyMiddleware } from 'redux';
import FeedMiddleware from './feed_middleware';
import PlayerMiddleware from './player_middleware';
import UserMiddleware from './user_middleware';

const myMiddlewares = [
	FeedMiddleware,
	PlayerMiddleware,
	UserMiddleware
];

const masterMiddleware = applyMiddleware(...myMiddlewares);

export default masterMiddleware;
