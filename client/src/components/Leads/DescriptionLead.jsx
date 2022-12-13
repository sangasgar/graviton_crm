/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import getDescriptionLeadThunk from '../../redux/thunks/getDescriptionLeadThunk';
import deleteLeadThunk from '../../redux/thunks/deleteLeadThunk';
import ChangeStatusModal from './ChangeStatusModal';

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

export default function DescriptionLead() {
  const [changeCompanyVisible, setChangeCompanyVisible] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const dataLead = useSelector((store) => store.descriptionLead);
  const navigate = useNavigate();
  const deleteHandler = (idLead) => {
    dispatch(deleteLeadThunk(idLead));
    navigate('/leads');
  };
  const [value, setValue] = useState(false);

  useEffect(() => {
    dispatch(getDescriptionLeadThunk(id));
  }, [value]);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.title}>
          <div className={classes.content}>
            Название:
            {' '}
            {dataLead?.lead_name}
          </div>
          <div className={classes.content}>
            Тип лида:
            {' '}
            {dataLead?.Leads_type?.name}
          </div>
          <div className={classes.content}>
            Комментарий:
            {' '}
            {dataLead?.comment}
          </div>
        </div>
        <div className={classes.title}>
          <div className={classes.content}>
            Компания:
            {' '}
            {dataLead?.Company?.name}
          </div>
          <div className={classes.content}>
            Статус:
            {' '}
            {dataLead?.Status?.name}
          </div>
          <div className={classes.content}>
            {dataLead?.Status?.name !== 'Активный' ? <Button variant="outlined" onClick={() => setChangeCompanyVisible(true)}>Изменить статус лида</Button> : <div />}
          </div>
          <ChangeStatusModal value={value} setValue={setValue} show={changeCompanyVisible} onHide={() => setChangeCompanyVisible(false)} idLead={id} />
        </div>
        <div className={classes.button}>
          <Button style={{ border: '1px solid red' }} size="small" onClick={() => deleteHandler(id)}>Удалить</Button>
        </div>
      </div>
    </div>
  );
}
