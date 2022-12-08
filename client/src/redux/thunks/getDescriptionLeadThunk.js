import getDescriptionLeadAC from '../actions/getDescriptionLeadAC';

const getDescriptionLeadThunk = (id) => async (dispatch) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_HOST}/lead/${id}`);
    const data = await response.json();
    if (response.ok) {
      dispatch(getDescriptionLeadAC(data));
    } else {
      // eslint-disable-next-line no-alert
      alert('Что-то пошло не так!');
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export default getDescriptionLeadThunk;
