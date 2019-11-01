import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import {userReducer} from './user_reducer';


const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  user: userReducer
});

export default rootReducer;