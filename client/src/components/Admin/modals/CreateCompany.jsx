/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import addCompanyThunk from '../../../redux/thunks/addCompanyThunk';

export default function CreateCompany({ open, onClose }) {
  const [nameCompany, setName] = useState('');
  const [phoneCompany, setPhone] = useState('');
  const [commentCompany, setComment] = useState('');
  const [emailCompany, setEmail] = useState('');
  const dispatch = useDispatch();

  const addCommentHandler = (name, phone, email, comment) => {
    dispatch(addCompanyThunk(name, phone, email, comment));
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
            value={nameCompany}
            onChange={(e) => setName(e.target.value)}
            style={style.select}
            placeholder="Введите название"
            type="text"
          />
          <input
            value={phoneCompany}
            onChange={(e) => setPhone(e.target.value)}
            style={style.select}
            placeholder="Введите телефон"
            type="text"
          />
          <input
            value={emailCompany}
            onChange={(e) => setEmail(e.target.value)}
            style={style.select}
            className="mb-2 border border-secondary"
            placeholder="Введите email"
            type="text"
          />
          <input
            value={commentCompany}
            onChange={(e) => setComment(e.target.value)}
            style={style.select}
            className="mb-2 border border-secondary"
            placeholder="Введите комментарий"
            type="text"
          />
          <Button sx={style.button} onClick={onClose}>Закрыть</Button>
          <Button sx={style.button} onClick={() => addCommentHandler(nameCompany, phoneCompany, emailCompany, commentCompany)}>Добавить</Button>
        </FormControl>
      </Box>
    </Modal>
  );
}
