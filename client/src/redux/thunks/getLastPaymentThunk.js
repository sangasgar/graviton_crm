import getPaymentsAC from "../actions/getPaymentsAC";

const getLastPaymentThunk = (id) => async (dispatch) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${process.env.REACT_APP_HOST}/payments/${id}/all`, {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json()
      if (response.ok) {
        dispatch(getPaymentsAC(data))
        console.log('Платежи получены');
      } else {
        // eslint-disable-next-line no-alert
        alert('Что-то пошло не так!');
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      // console.log(error);
    }
  };
  
  export default getLastPaymentThunk;
  