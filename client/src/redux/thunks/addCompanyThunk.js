const addCompanyThunk = (name, phone, email, comment) => async (dispatch) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_HOST}/companies/add`, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({name, phone, email, comment}) // body data type must match "Content-Type" header
        });
      if (response.ok) {
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
  
  export default addCompanyThunk;
  