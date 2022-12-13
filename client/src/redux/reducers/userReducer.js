/* eslint-disable default-param-last */
const userReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'AUTH':
      return payload;
    case 'CHECK_AUTH':
      return payload;
    default:
      return state;
  }
};

export default userReducer;
