import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import FeedMiddleware from './feed_middleware';
import PlayerMiddleware from './player_middleware';
import UserMiddleware from './user_middleware';

const myMiddlewares = [FeedMiddleware, PlayerMiddleware, UserMiddleware];

if (process.env.NODE_ENV !== 'production') {
	// myMiddlewares.push(createLogger());
}

const masterMiddleware = applyMiddleware(...myMiddlewares);

export default masterMiddleware;
