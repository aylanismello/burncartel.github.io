import FeedMiddleware from './feed_middleware';
import PlayerMiddleware from './player_middleware';
import UserMiddleware from './user_middleware';
import { applyMiddleware } from 'redux';
import createLogger  from 'redux-logger';

let myMiddlewares = [ FeedMiddleware,  PlayerMiddleware, UserMiddleware ];

if(process.env['NODE_ENV'] !== 'production') {
  myMiddlewares.push(createLogger());
}

const masterMiddleware = applyMiddleware(
  ...myMiddlewares
);

export default masterMiddleware;
