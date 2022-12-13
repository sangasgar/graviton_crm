/* eslint-disable import/extensions */
import deleteCompanyAC from '../actions/deleteCompanyAC.js';
import defaultHost from '../../default/defaultHost';
const HOST = defaultHost.main_host
const deleteCompanyThunk = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${HOST}/companies/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      dispatch(deleteCompanyAC(id));
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
