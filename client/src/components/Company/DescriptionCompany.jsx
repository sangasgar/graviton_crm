/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import getDescriptionCompanyThunk from '../../redux/thunks/getDescriptionCompanyThunk';
import deleteCompanyThunk from '../../redux/thunks/deleteCompanyThunk';
import AddBalanceModal from './AddBalanceModal';

const useStyles = makeStyles({
  container: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    width: 900,
    height: '90%',
    backgroundColor: '#fff',
    margin: '50px',
    flexWrap: 'wrap',
  },
  title: {
    margin: '10px',
    height: 500,
    width: 400,
  },
  button: {
    position: 'absolute',
    bottom: '20%',
    right: '65%',
  },
  root: {
    background: '#188A77',
    position: 'absolute',
    top: '4em',
    right: '0px',
    bottom: '0px',
    left: '0px',
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    margin: '30px',
    fontFamily: 'Impact, fantasy',
    fontSize: '24px',
    color: '#188A77',
  },
});

export default function DescriptionCompany() {
  const [addBalanceVisible, setAddBalanceVisible] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const dataCompany = useSelector((store) => store.descriptionCompany);
  const navigate = useNavigate();
  const [value, setValue] = useState(1);

  const deleteHandler = (idCompany) => {
    dispatch(deleteCompanyThunk(idCompany));
    navigate('/company');
  };
  useEffect(() => {
    setTimeout(() => {
      dispatch(getDescriptionCompanyThunk(id));
    }, 100);
  }, [value]);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.title}>
          <div className={classes.content}>
            ????????????????:
            {' '}
            {dataCompany?.name}
          </div>
          <div className={classes.content}>
            ??????????????:
            {' '}
            {dataCompany?.phone}
          </div>
          <div className={classes.content}>
            Email:
            {' '}
            {dataCompany?.email}
          </div>
          <div className={classes.content}>
            ??????????????????????:
            {' '}
            {dataCompany?.comment}
          </div>
        </div>
        <div className={classes.title}>
          <div className={classes.content}>
            ????????????:
            {' '}
            {dataCompany?.balance}
            {' '}
            $
          </div>
          <div className={classes.content}>
            <Button variant="outlined" onClick={() => setAddBalanceVisible(true)}>?????????????????? ????????????</Button>
          </div>
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th>??????????</th>
                  <th>??????????????????????</th>
                  <th>???????? ????????????????????</th>
                </tr>
              </thead>
              <tbody>
                {dataCompany?.Payments?.map((el) => (
                  <tr>
                    <td>{el?.price}</td>
                    <td>{el?.comment}</td>
                    <td>{el?.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <AddBalanceModal value={value} setValue={setValue} open={addBalanceVisible} onClose={() => setAddBalanceVisible(false)} companyId={dataCompany?.id} />
      <div className={classes.button}>
        <Button style={{ border: '1px solid red' }} size="small" onClick={() => deleteHandler(id)}>??????????????</Button>
      </div>
    </div>
  );
}
