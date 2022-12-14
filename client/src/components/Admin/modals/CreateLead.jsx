/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable no-shadow */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import addLeadThunk from '../../../redux/thunks/addLeadThunk';
import getTypeLeadThunk from '../../../redux/thunks/getTypeLeadThunk';

export default function Createlead({ open, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [typeLeadId, setTypeLeadId] = useState('');
  const dispatch = useDispatch();
  const allType = useSelector((store) => store.allTypeLead);

  const addLeadHandler = (lead_name, lead_phone, comment, lead_type_id) => {
    dispatch(addLeadThunk(lead_name, lead_phone, comment, lead_type_id));
    onClose();
  };
  const handleChange = (event) => {
    setTypeLeadId(event.target.value);
  };
  const style = {
    box: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      height: 400,
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
      height: '30px',
      margin: '10px',
      display: 'flex',
      justifyContent: 'center',
    },
    p: {
      margin: '0 auto',
      fontWeight: 'bolder',
    },
  };
  useEffect(() => {
    dispatch(getTypeLeadThunk());
  }, []);
  return (
    <Modal
      open={open}
      onClose={onClose}
      size="lg"
      centered
    >
      <Box sx={style.box}>
        <div style={style.select}><div style={style.p}>Добавить лид</div></div>
        <FormControl sx={style.form}>
          <div style={style.select}>
            <select style={style.select} onChange={handleChange}>
              <option>Выберите тип</option>
              {allType.map((type) => <option value={type.id}>{type.name}</option>)}
            </select>
          </div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={style.select}
            placeholder="Введите название"
            type="text"
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={style.select}
            placeholder="Введите телефон"
            type="text"
          />
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            style={style.select}
            placeholder="Введите комментарий"
            type="text"
          />
          <Button sx={style.button} onClick={onClose}>Закрыть</Button>
          <Button sx={style.button} onClick={() => addLeadHandler(name, phone, comment, typeLeadId)}>Добавить</Button>
        </FormControl>
      </Box>
    </Modal>
  );
}
