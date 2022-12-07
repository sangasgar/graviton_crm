const allLeadsReducer = (state = [], action) => {
    const { type, payload } = action;
    switch (type) {
      case 'GET_LEADS':
        return payload;
      case 'DELETE_LEAD':
        return state.filter((el) => el.id !== payload);
      default:
        return state;
    }
  };
  
  export default allLeadsReducer;
  