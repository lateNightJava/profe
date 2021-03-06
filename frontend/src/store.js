import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RootReducer from './reducers';

const middlewares = [thunk, logger];

export const configureStore = (preloadedState = {}) => createStore(
  RootReducer,
  preloadedState,
  applyMiddleware(...middlewares)
);
