import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { userReducer } from './user_reducer';
import { contractReducer } from './contract_reducer';
import record from './record';
import upload from './upload';


const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  user: userReducer,
  contract: contractReducer,
  record,
  router: connectRouter(history),
  upload
});

export default rootReducer;
