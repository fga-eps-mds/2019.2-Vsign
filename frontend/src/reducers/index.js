import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import record from './record';
import upload from './upload';


const rootReducer = (history) => combineReducers({
  record,
  router: connectRouter(history),
  upload
});

export default rootReducer;