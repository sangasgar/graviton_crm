/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable no-shadow */
/* eslint-disable react/react-in-jsx-scope */
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import updateUserThunk from '../../../redux/thunks/updateuserThunk';

export default function UpdateUser({ open, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { id } = useSelector((store) => store.user);
  const updateUserHandler = (id, name, email, password) => {
    dispatch(updateUserThunk(id, name, email, password));
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
        <div style={style.select}><div style={style.p}>Добавить компанию</div></div>
        <FormControl sx={style.form}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={style.select}
            placeholder="Введите новое имя"
            type="text"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={style.select}
            placeholder="Введите новый email"
            type="text"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={style.select}
            placeholder="Введите новый пароль"
            type="text"
          />
          <Button sx={style.button} onClick={onClose}>Закрыть</Button>
          <Button sx={style.button} onClick={() => updateUserHandler(id, name, email, password)}>Подтвердить</Button>
        </FormControl>
      </Box>
    </Modal>
  );
}
