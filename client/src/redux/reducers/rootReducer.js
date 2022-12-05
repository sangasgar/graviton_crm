import { combineReducers } from 'redux';
import allLeadsReducer from './allLeadsReducer';

const rootReducer = combineReducers({
  allLeads: allLeadsReducer,
});

export default rootReducer;
