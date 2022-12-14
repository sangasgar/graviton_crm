import { combineReducers } from 'redux';
import allCompanyReducer from './allCompanyReducer';
import allLeadsReducer from './allLeadsReducer';
import allTypeLeadReducer from './allTypeLeadReducer';
import descriptionCompanyReducer from './descriptionCompanyReducer';
import descriptionLeadReducer from './descriptionLeadReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  allLeads: allLeadsReducer,
  allCompany: allCompanyReducer,
  descriptionCompany: descriptionCompanyReducer,
  descriptionLead: descriptionLeadReducer,
  user: userReducer,
  allTypeLead: allTypeLeadReducer,
});

export default rootReducer;
