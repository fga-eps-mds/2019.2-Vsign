import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import {userReducer} from './user_reducer';
import { contractReducer } from './contract_reducer';


const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  user: userReducer,
  contract: contractReducer,
});

export default rootReducer;
