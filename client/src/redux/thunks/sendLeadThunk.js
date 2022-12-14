/* eslint-disable camelcase */
import defaultHost from '../../default/defaultHost';

const HOST = defaultHost.main_host;
const sendLeadThunk = (id, company_id) => async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${HOST}/leads/lead-send`, {
      method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id, company_id }), // body data type must match "Content-Type" header
    });
    const data = await response.json();
    if (!data.updateLeadStatus) {
      // eslint-disable-next-line no-alert
      alert('Проверьте баланс компании');
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export default sendLeadThunk;
