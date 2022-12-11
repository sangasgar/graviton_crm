const addLeadThunk = (lead_name,lead_phone,comment,lead_type_id) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${process.env.REACT_APP_HOST}/leads/add`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({lead_name,lead_phone,comment,lead_type_id}) // body data type must match "Content-Type" header
      });
    if (response.ok) {
      console.log('Лид добавлен');
    } else {
      // eslint-disable-next-line no-alert
      alert('Что-то пошло не так!');
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    // console.log(error);
  }
};

export default addLeadThunk;
