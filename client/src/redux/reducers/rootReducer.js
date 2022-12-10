import { combineReducers } from 'redux';
import allCompanyReducer from './allCompanyReducer';
import allLeadsReducer from './allLeadsReducer';
import allPaymentsCompanyReducer from './allPaymentsCompanyReducer';
import descriptionCompanyReducer from './descriptionCompanyReducer';
import descriptionLeadReducer from './descriptionLeadReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  allLeads: allLeadsReducer,
  allCompany: allCompanyReducer,
  descriptionCompany: descriptionCompanyReducer,
  descriptionLead: descriptionLeadReducer,
  user: userReducer,
  allPaymentsCompany: allPaymentsCompanyReducer,
});

export default rootReducer;
