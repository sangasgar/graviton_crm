/* eslint-disable default-param-last */
const allLeadsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_LEADS':
      return payload;
    case 'DELETE_LEAD':
      return state.filter((el) => el.id !== payload);
    case 'SORT_LEADS':
      return state.filter((el) => el.Status.id === payload);
    default:
      return state;
  }
};

export default allLeadsReducer;
