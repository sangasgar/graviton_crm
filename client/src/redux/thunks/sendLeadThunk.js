const sendLeadThunk = (id, company_id) => async (dispatch) => {
    try {
      console.log(id, company_id);
    const token = localStorage.getItem('token');
      const response = await fetch(`${process.env.REACT_APP_HOST}/leads/lead-send`, {
          method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({id, company_id}) // body data type must match "Content-Type" header
        });
      const data = await response.json();
      console.log(data);
      if (data.updateLeadStatus) {
        console.log('Лид назначен комапнии');
      } else {
        // eslint-disable-next-line no-alert
        alert('Проверьте баланс компании');
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };
  
  export default sendLeadThunk;
  