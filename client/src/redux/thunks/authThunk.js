/* eslint-disable no-alert */
import authAC from '../actions/authAC';

const authThunk = ({ email, password }) => async (dispatch) => {
  try {
    if (email && password) {
      const response = await fetch(`${process.env.REACT_APP_HOST}/users`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        dispatch(authAC({id: data.id, email: data.email, name: data.name}));
        localStorage.setItem('token', data.token);
        if (!data.token) {
          // eslint-disable-next-line no-alert
          alert('Ввели неправильные данные');
        }
      } else {
        // eslint-disable-next-line no-alert
        alert('Что-то пошло не так!');
      }
    } else {
      alert('Выберите');
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export default authThunk;
