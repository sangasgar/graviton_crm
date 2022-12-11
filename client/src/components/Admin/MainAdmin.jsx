import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CreateCompany from './modals/CreateCompany';
import CreateLead from './modals/CreateLead';
import UpdateUser from './modals/UpdateUser';

const useStyles = makeStyles({
  container: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    width: 1300,
    height: 600,
    backgroundColor: '#C1F7EE',
    margin: '50px',
    flexWrap: 'wrap',
  },
  title: {
    margin: '10px',
    height: 500,
    width: 600,
  },
  button: {
    position: 'absolute',
    bottom: '30px',
    right: '630px',
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
    width: '200px',
  },
});

export default function MainAdmin() {
  const [addLeadVisible, setAddLeadVisible] = useState(false);
  const [addCompanyVisible, setAddCompanyVisible] = useState(false);
  const [updateUser, setUpdateUser] = useState(false);
  const clickHandler = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };
  const classes = useStyles();

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
          <CreateLead show={addLeadVisible} onHide={() => setAddLeadVisible(false)} />
          <CreateCompany show={addCompanyVisible} onHide={() => setAddCompanyVisible(false)} />
          <UpdateUser show={updateUser} onHide={() => setUpdateUser(false)} />
          <div className={classes.button}>
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
        <div className={classes.title}>
          <div className={classes.content}>
            <Button variant="secondary" className="mt-2" onClick={() => setUpdateUser(true)}> Изменить данные аккаунта </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
