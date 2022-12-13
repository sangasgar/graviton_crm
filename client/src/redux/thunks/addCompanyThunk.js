import defaultHost from '../../default/defaultHost';
const HOST = defaultHost.main_host
const addCompanyThunk = (name, phone, email, comment) => async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${HOST}/companies/add`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name, phone, email, comment,
      }), // body data type must match "Content-Type" header
    });
    if (!response.ok) {
      // eslint-disable-next-line no-alert
      alert('Что-то пошло не так!');
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    // console.log(error);
  }
};

export default addCompanyThunk;
