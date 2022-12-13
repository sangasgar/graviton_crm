import getDescriptionCompanyAC from '../actions/getDescriptionCompanyAC';

const getDescriptionCompanyThunk = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${process.env.REACT_APP_HOST}/companies/${id}`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (response.ok) {
      const arr = [];
      // eslint-disable-next-line no-plusplus
      for (let i = data.Payments.length - 1; i >= data.Payments.length - 5; i--) {
        arr.push(data.Payments[i]);
      }
      data.Payments = arr;
      dispatch(getDescriptionCompanyAC(data));
    } else {
      // eslint-disable-next-line no-alert
      alert('Что-то пошло не так!');
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export default getDescriptionCompanyThunk;
