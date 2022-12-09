const sendLeadThunk = (id, company_id) => async (dispatch) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_HOST}/leads/lead-send`, {
          method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({id, company_id}) // body data type must match "Content-Type" header
        });
      if (response.ok) {
        console.log('Лид назначен комапнии');
      } else {
        // eslint-disable-next-line no-alert
        alert('Что-то пошло не так!');
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      // console.log(error);
    }
  };
  
  export default sendLeadThunk;
  