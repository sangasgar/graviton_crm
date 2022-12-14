import defaultHost from '../../default/defaultHost';
import getTypeLeadAC from '../actions/getTypeLeadAC';

const HOST = defaultHost.main_host;
const getTypeLeadThunk = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${HOST}/lead-type`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (response.ok) {
      dispatch(getTypeLeadAC(data));
    } else {
      // eslint-disable-next-line no-alert
      alert('Что-то пошло не так!');
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    // console.log(error);
  }
};

export default getTypeLeadThunk;
