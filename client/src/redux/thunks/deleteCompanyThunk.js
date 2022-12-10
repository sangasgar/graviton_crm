import deleteCompanyAC from '../actions/deleteCompanyAC.js';

const deleteCompanyThunk = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${process.env.REACT_APP_HOST}/companies/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
           authorization: `Bearer ${token}`,
        }});
    if (response.ok) {
      dispatch(deleteCompanyAC(id));
      console.log('Компания удалена');
    } else {
      // eslint-disable-next-line no-alert
      alert('Что-то пошло не так!');
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    // console.log(error);
  }
};

export default deleteCompanyThunk;
