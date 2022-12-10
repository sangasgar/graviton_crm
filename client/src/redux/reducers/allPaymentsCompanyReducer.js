const allPaymentsCompanyReducer = (state = [], action) => {
    const { type, payload } = action;
    switch (type) {
      case 'GET_PAYMENTS_COMPANY':
        return payload;
      default:
        return state;
    }
  };
  
  export default allPaymentsCompanyReducer;
  