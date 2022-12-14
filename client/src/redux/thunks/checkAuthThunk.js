import axios from 'axios';
import checkAuthAC from '../actions/checkAuthAC';
import defaultHost from '../../default/defaultHost';

const HOST = defaultHost.main_host;
const checkUser = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  const option = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const user = await axios.post(`${HOST}/users/check`, {}, option);
  dispatch(checkAuthAC(user.data));
};

export default checkUser;
