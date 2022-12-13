/* eslint-disable default-param-last */
const descriptionLeadReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_ONE_LEAD':
      return payload;
    case 'DELETE_LEAD':
      return state.filter((el) => el.id !== payload);
    default:
      return state;
  }
};

export default descriptionLeadReducer;
