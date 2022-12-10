import getDescriptionCompanyAC from '../actions/getDescriptionCompanyAC';

const getDescriptionCompanyThunk = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${process.env.REACT_APP_HOST}/companies/${id}`, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
         authorization: `Bearer ${token}`,
      }});
    const data = await response.json();
    if (response.ok) {
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
