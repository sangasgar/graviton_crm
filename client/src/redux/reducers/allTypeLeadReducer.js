/* eslint-disable default-param-last */
const allTypeLeadReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_TYPE_LEAD':
      return payload;
    default:
      return state;
  }
};

export default allTypeLeadReducer;
