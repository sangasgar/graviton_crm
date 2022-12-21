/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import CreateCompany from './modals/CreateCompany';
import CreateLead from './modals/CreateLead';
import UpdateUser from './modals/UpdateUser';
import getTypeLeadThunk from '../../redux/thunks/getTypeLeadThunk';
import AddTypeLead from './modals/AddTypeLead';

const useStyles = makeStyles({
  container: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    width: 900,
    height: 400,
    backgroundColor: '#fff',
    margin: '50px',
    flexWrap: 'wrap',
  },
  title: {
    margin: '5px',
    height: 500,
    width: 200,
  },
  button: {
    position: 'absolute',
    bottom: '30px',
    right: '450px',
    border: '1px solid red',
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
    fontSize: '24px',
    color: '#188A77',
    width: '150px',
    height: '100px',
  },
  buttonMain: {
    height: '50px',
    width: '120px',
  },
  table: {
    fontSize: '16px',
  },
});

export default function MainAdmin() {
  const [addLeadVisible, setAddLeadVisible] = useState(false);
  const [addCompanyVisible, setAddCompanyVisible] = useState(false);
  const [updateUser, setUpdateUser] = useState(false);
  const [addTypeLead, setAddTypeLead] = useState(false);
  const allTypeLead = useSelector((store) => store.allTypeLead);
  const [valueTypeLead, setValueTypeLead] = useState(false);
  const dispatch = useDispatch();
  const clickHandler = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };
  const classes = useStyles();

  useEffect(() => {
    dispatch(getTypeLeadThunk());
  }, [valueTypeLead]);
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.title}>
          <div className={classes.content}>
            <Button variant="secondary" className="mt-2" onClick={() => setAddLeadVisible(true)}> Добавить лид</Button>
          </div>
          <div className={classes.content}>
            <Button variant="secondary" className="mt-2" onClick={() => setAddCompanyVisible(true)}> Добавить компанию</Button>
          </div>
          <div className={classes.content}>
            <Button variant="secondary" className="mt-2" onClick={() => setUpdateUser(true)}> Изменить данные аккаунта </Button>
          </div>
          <CreateLead open={addLeadVisible} onClose={() => setAddLeadVisible(false)} />
          <CreateCompany open={addCompanyVisible} onClose={() => setAddCompanyVisible(false)} />
          <UpdateUser open={updateUser} onClose={() => setUpdateUser(false)} />
          <div className={classes.button}>
            <AddTypeLead valueTypeLead={valueTypeLead} setValue={setValueTypeLead} open={addTypeLead} onClose={() => setAddTypeLead(false)} />
            <Link
              to="/"
              style={{
                fontSize: '20px', letterSpacing: '2px', color: 'black', margin: '3px',
              }}
              onClick={clickHandler}
            >
              Выйти
            </Link>
          </div>
        </div>
        <div className={classes.title} />
        <div className={classes.content}>
          <Button variant="secondary" className="mt-2" onClick={() => setAddTypeLead(true)}> Добавить тип лида </Button>
          <table className={classes.table}>
            <thead>
              <tr>
                <th>Название</th>
                <th>Цена</th>
              </tr>
            </thead>
            <tbody>
              {allTypeLead?.map((type) => (
                <tr>
                  <td>{type?.name}</td>
                  <td>{type?.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
