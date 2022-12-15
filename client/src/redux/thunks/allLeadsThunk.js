import getAllLeadsAC from '../actions/allLeadsAction';
import defaultHost from '../../default/defaultHost';

const HOST = defaultHost.main_host;
const getAllLeadsThunk = (valueSort, sortCompany) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${HOST}/leads/all`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
    let data = await response.json();
    if (valueSort) {
      data = data.filter((lead) => lead.Status.id === valueSort);
    }
    if (sortCompany) {
      data = data.filter((lead) => lead.Company.id === sortCompany);
    }
    if (response.ok) {
      dispatch(getAllLeadsAC(data));
    } else {
      // eslint-disable-next-line no-alert
      alert('Что-то пошло не так!');
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    // console.log(error);
  }
};

export default getAllLeadsThunk;
