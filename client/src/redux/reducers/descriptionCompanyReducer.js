const descriptionCompanyReducer = (state = [], action) => {
    const { type, payload } = action;
    switch (type) {
      case 'GET_ONE_COMPANY':
        return payload;
      case 'DELETE_COMPANY':
        return state.filter((el) => el.id !== payload);
      default:
        return state;
    }
  };
  
  export default descriptionCompanyReducer;
  