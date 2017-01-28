import FeedMiddleware from './feed_middleware';
import { applyMiddleware } from 'redux';
import createLogger  from 'redux-logger';

let myMiddlewares = [ FeedMiddleware ];


if(process.env['NODE_ENV'] !== 'production') {
  myMiddlewares.push(createLogger());
}


const masterMiddleware = applyMiddleware(
  ...myMiddlewares
);

export default masterMiddleware;
