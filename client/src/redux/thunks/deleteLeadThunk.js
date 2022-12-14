import deleteLeadsAC from '../actions/deleteLeadsAC';
import defaultHost from '../../default/defaultHost';

const HOST = defaultHost.main_host;
const deleteLeadThunk = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${HOST}/leads/${id}`, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      dispatch(deleteLeadsAC(id));
    } else {
      // eslint-disable-next-line no-alert
      alert('Что-то пошло не так!');
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    // console.log(error);
  }
};

export default deleteLeadThunk;
