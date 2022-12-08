import deleteLeadsAC from '../actions/deleteLeadsAC';

const deleteLeadThunk = (id) => async (dispatch) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_HOST}/leads/${id}`, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        },);
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