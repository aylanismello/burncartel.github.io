import { createStore, compose } from 'redux';
import RootReducer from '../reducers/root_reducer';
import masterMiddleware from '../middleware/master_middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedState = {}) =>
	createStore(RootReducer, preloadedState, composeEnhancers(masterMiddleware));

export default configureStore;
