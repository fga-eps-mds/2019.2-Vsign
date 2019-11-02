import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import record from './record';


const rootReducer = (history) => combineReducers({
  record,
  router: connectRouter(history)
});

export default rootReducer;