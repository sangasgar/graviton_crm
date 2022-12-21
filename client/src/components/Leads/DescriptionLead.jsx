/* eslint-disable react/jsx-indent */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import getDescriptionLeadThunk from '../../redux/thunks/getDescriptionLeadThunk';
import deleteLeadThunk from '../../redux/thunks/deleteLeadThunk';
import ChangeStatusModal from './ChangeStatusModal';
import UpdateCommentModal from './UpdateCommentModal';
import UpdateTypeLeadModal from './UpdateTypeLeadModal';
import getTypeLeadThunk from '../../redux/thunks/getTypeLeadThunk';

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
    margin: '10px',
    height: 500,
    width: 400,
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
  const [open, setOpen] = useState(false);
  const [openUpdateComment, setOpenUpdateComment] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [updateTypeVisible, setUpdateTypeVisible] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const UpdateTypeHandler = () => {
    setUpdateTypeVisible(true);
  };
  const dispatch = useDispatch();
  const { id } = useParams();
  const dataLead = useSelector((store) => store.descriptionLead);
  const navigate = useNavigate();
  const deleteHandler = (idLead) => {
    dispatch(deleteLeadThunk(idLead));
    navigate('/leads');
  };
  const [value, setValue] = useState('Выберите статус');
  const [value1, setValue1] = useState(false);
  const allTypeLead = useSelector((store) => store.allTypeLead);

  useEffect(() => {
    setTimeout(() => dispatch(getDescriptionLeadThunk(id)), 100);
  }, [value, trigger, value1]);
  const classes = useStyles();
  useEffect(() => {
    dispatch(getTypeLeadThunk());
  }, []);
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
          <div className={classes.content}>
            <Button variant="outlined" onClick={() => setOpenUpdateComment(true)}> Изменить комметарий </Button>
            <UpdateCommentModal value={trigger} setValue={setTrigger} open={openUpdateComment} onClose={setOpenUpdateComment} idLead={id} />
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
            {dataLead?.Status?.name !== 'Активный' ? <Button variant="outlined" onClick={handleOpen}>Изменить статус лида</Button> : <div />}
          </div>
          <div className={classes.content}>
          {dataLead?.Status?.name === 'Активный' ? <Button variant="outlined" onClick={UpdateTypeHandler}>Изменить тип лида</Button> : null}
          </div>
          <UpdateTypeLeadModal value={value1} setValue={setValue1} open={updateTypeVisible} onClose={() => setUpdateTypeVisible(false)} idLead={id} allTypeLead={allTypeLead} />
          <ChangeStatusModal value={value} setValue={setValue} open={open} onClose={handleClose} idLead={id} />
        </div>
        <div className={classes.button}>
          {dataLead?.Status?.name !== 'Передан' ? <Button style={{ border: '1px solid red' }} size="small" onClick={() => deleteHandler(id)}>Удалить</Button> : null}
        </div>
      </div>
    </div>
  );
}
