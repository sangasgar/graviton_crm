/* eslint-disable camelcase */
import defaultHost from '../../default/defaultHost';

const HOST = defaultHost.main_host

const updateUserThunk = (id, name, email, password) => async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${HOST}/users`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id, name, email, password,
      }),
    });
    if (!response.ok) {
      // eslint-disable-next-line no-alert
      alert('Что-то пошло не так!');
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export default updateUserThunk;
