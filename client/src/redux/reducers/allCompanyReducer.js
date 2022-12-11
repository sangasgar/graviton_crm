/* eslint-disable default-param-last */
const allCompanyReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_COMPANY':
      return payload;
    case 'DELETE_PRODUCT':
      return state.filter((el) => el.id !== payload);
    default:
      return state;
  }
};

export default allCompanyReducer;
