import { createStore, compose } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import RootReducer from '../reducers/root_reducer';
import masterMiddleware from '../middleware/master_middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = (preloadedState = {}) =>
	createStore(RootReducer, preloadedState, composeEnhancers(masterMiddleware, autoRehydrate()));

const myStore = store();

persistStore(myStore);

export default myStore;
