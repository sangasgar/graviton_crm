import getAllLeadsAC from '../actions/allLeadsAction';

const getAllLeadsThunk = () => async (dispatch) => {
  try {
<<<<<<< HEAD
    const response = await fetch(`${process.env.REACT_APP_HOST}/leads`);
=======
    const response = await fetch(`http://localhost:3030/leads`);
>>>>>>> 307bc2c38e192a55c0e1366bd54b7c351327da1c
    const data = await response.json();
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
