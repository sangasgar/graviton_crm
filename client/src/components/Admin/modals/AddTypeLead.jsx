/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import addTypeLeadThunk from '../../../redux/thunks/addTypeLeadThunk';

export default function AddTypeLead({
  valueTypeLead, setValue, open, onClose,
}) {
  const [nameTypeLead, setNameTypeLead] = useState('');
  const [price, setPrice] = useState('');
  const dispatch = useDispatch();

  const addTypeLeadHandler = (name, priceLead) => {
    dispatch(addTypeLeadThunk(name, priceLead));
    setValue(!valueTypeLead);
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
        <div style={style.select}><div style={style.p}>Добавить тип лида</div></div>
        <FormControl sx={style.form}>
          <input
            value={nameTypeLead}
            onChange={(e) => setNameTypeLead(e.target.value)}
            style={style.select}
            placeholder="Введите название"
            type="text"
          />
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={style.select}
            placeholder="Введите цену"
            type="text"
          />
          <Button sx={style.button} onClick={onClose}>Закрыть</Button>
          <Button sx={style.button} onClick={() => addTypeLeadHandler(nameTypeLead, price)}>Добавить</Button>
        </FormControl>
      </Box>
    </Modal>
  );
}
