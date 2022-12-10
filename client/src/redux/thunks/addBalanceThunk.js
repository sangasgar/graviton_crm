const addBalanceThunk = (company_id, payment_sum) => async (dispatch) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${process.env.REACT_APP_HOST}/payments/add`, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
             authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({company_id, payment_sum}) // body data type must match "Content-Type" header
        });
        const data = await response.json();
      if (data.createPaymentStatus) {
        console.log('Компания добавлена');
      } else {
        // eslint-disable-next-line no-alert
        alert('Что-то пошло не так!');
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      // console.log(error);
    }
  };
  
  export default addBalanceThunk;
  