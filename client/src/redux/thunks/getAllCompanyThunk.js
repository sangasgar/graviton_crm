import getAllCompanyAC from '../actions/getAllCompanyAC';
import defaultHost from '../../default/defaultHost';
const HOST = defaultHost.main_host
const getAllCompanyThunk = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${HOST}/companies/all`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (response.ok) {
      dispatch(getAllCompanyAC(data));
    } else {
      // eslint-disable-next-line no-alert
      alert('Что-то пошло не так!');
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    // console.log(error);
  }
};

export default getAllCompanyThunk;
