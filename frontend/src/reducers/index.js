import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import userReducer from './user';
import contract from './contract';
import record from './record';
import upload from './upload';
import session from './session';


const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  user: userReducer,
  contract,
  record,
  upload,
  session
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default rootReducer;
