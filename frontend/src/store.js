import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger';
import createReduxPromiseListener from 'redux-promise-listener';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from './reducers';
export const history = createBrowserHistory();

const enhancers = [];
const reduxPromiseListener = createReduxPromiseListener();

export const sagaMiddleware = createSagaMiddleware();
const middleware = [
  sagaMiddleware,
  routerMiddleware(history),
  reduxPromiseListener.middleware
];

export const promiseListener = reduxPromiseListener;

if (process.env.NODE_ENV === 'development') {

  const logger = createLogger({
    level: 'info',
    collapsed: true
  });
  middleware.push(logger);

  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const configureStore = () => {
  const initialState = {
    session: {
      authenticated: (sessionStorage.getItem("userToken") !== null)
    }
  };
  return createStore(createRootReducer(history), initialState, composedEnhancers);
}

const store = configureStore();

export default store;
