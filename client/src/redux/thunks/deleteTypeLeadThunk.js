import defaultHost from '../../default/defaultHost';

const HOST = defaultHost.main_host;
const deleteTypeLeadThunk = (id) => async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${HOST}/lead-type`, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id,
      }),
    });
    const data = await response.json();
    if (!data.leadTypeDeleteStatus) {
      // eslint-disable-next-line no-alert
      alert('Данный тип привязан к лиду, который используется');
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    // console.log(error);
  }
};

export default deleteTypeLeadThunk;
