import { combineReducers } from 'redux';

import searchbox from './reducer-searchbox';
import robots from './reducer-robots';

const rootReducer = combineReducers({
  searchbox,
  robots
});

export default rootReducer;
