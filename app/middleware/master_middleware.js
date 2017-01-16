import FeedMiddleware from './feed_middleware';
import { applyMiddleware } from 'redux';
import createLogger  from 'redux-logger';

const masterMiddleware = applyMiddleware(
  FeedMiddleware,
  createLogger()
);

export default masterMiddleware;
