/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import * as React from 'react';
import addBalanceThunk from '../../redux/thunks/addBalanceThunk';

export default function AddBalanceModal({
  value, setValue, open, onClose, companyId,
}) {
  const [balance, setBalance] = useState('');
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const addBalanceHandler = (company_id, payment_sum, commentAdd) => {
    dispatch(addBalanceThunk(company_id, payment_sum, commentAdd));
    setValue(value + 1);
    onClose();
  };
  const style = {
    box: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      height: 300,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    },
    form: {
      width: '400px',
      height: '40px',
    },
    button: {
      border: '1px solid black',
      position: 'relative',
      top: '100%',
      left: '50%',
      transform: 'translate(-50%, 0)',
    },
    select: {
      width: '400px',
      margin: '10px',
      display: 'flex',
      justifyContent: 'center',
    },
    p: {
      margin: '0 auto',
      fontWeight: 'bolder',
    },
  };
  return (
    <Modal
      open={open}
      onClose={onClose}
      size="lg"
      centered
    >
      <Box sx={style.box}>
        <div style={style.select}><div style={style.p}>Пополнить баланс</div></div>
        <FormControl sx={style.form}>
          <input
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            style={style.select}
            placeholder="Введите сумму"
            type="text"
          />
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            style={style.select}
            placeholder="Введите комментарий"
            type="text"
          />
          <Button variant="secondary" onClick={onClose}>Закрыть</Button>
          <Button variant="secondary" onClick={() => addBalanceHandler(companyId, balance, comment)}>Подтвердить</Button>
        </FormControl>
      </Box>
    </Modal>
  );
}
