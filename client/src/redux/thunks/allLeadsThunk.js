import getAllLeadsAC from '../actions/allLeadsAction';

const getAllLeadsThunk = () => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:3030/leads`);
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
