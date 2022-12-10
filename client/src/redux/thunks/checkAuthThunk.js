
import checkAuthAC from "../actions/checkAuthAC";
import axios from 'axios'

const checkUser  = () => async (dispatch) => {
    const token = localStorage.getItem('token');
    const option = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    const user = await axios.post(`${process.env.REACT_APP_HOST}/users/check`, {}, option);
    dispatch(checkAuthAC(user.data))
  }

  export default checkUser