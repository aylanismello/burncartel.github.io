import { createStore, compose } from 'redux';
import { persistStore } from 'redux-persist';
import RootReducer from '../reducers/root_reducer';
import masterMiddleware from '../middleware/master_middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = (preloadedState = {}) =>
	createStore(
		RootReducer,
		preloadedState,
		composeEnhancers(masterMiddleware)
	);

const myStore = store();

persistStore(myStore);

export default myStore;
