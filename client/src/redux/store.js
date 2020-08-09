import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootSaga from './root-saga';

import rootReducer from './root-reducer';

import createSagaMiddleware from 'redux-saga';

const sagaMiddlewate = createSagaMiddleware();

const middlewares = [sagaMiddlewate];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddlewate.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };
