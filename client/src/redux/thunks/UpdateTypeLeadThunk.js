// /* eslint-disable camelcase */
// import defaultHost from '../../default/defaultHost';

// const HOST = defaultHost.main_host;
// const updateStatusThunk = (id, type) => async () => {
//   try {
//     const token = localStorage.getItem('token');
//     const response = await fetch(`${HOST}/leads/${id}/update-status`, {
//       method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
//       headers: {
//         'Content-Type': 'application/json',
//         authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({ status_id }),
//     });
//     if (!response.ok) {
//       // eslint-disable-next-line no-alert
//       alert('Что-то пошло не так!');
//     }
//   } catch (error) {
//     // eslint-disable-next-line no-console
//     console.log(error);
//   }
// };

// export default updateStatusThunk;
