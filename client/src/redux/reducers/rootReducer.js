import { combineReducers } from 'redux';
import allCompanyReducer from './allCompanyReducer';
import allLeadsReducer from './allLeadsReducer';

const rootReducer = combineReducers({
  allLeads: allLeadsReducer,
  allCompany: allCompanyReducer,
});

export default rootReducer;
