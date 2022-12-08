import getAllCompanyAC from '../actions/getAllCompanyAC';

const getAllCompanyThunk = () => async (dispatch) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_HOST}/company`);
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
