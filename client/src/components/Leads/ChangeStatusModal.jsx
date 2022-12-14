/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable react/react-in-jsx-scope */
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import updateStatusThunk from '../../redux/thunks/updateStatusThunk';

export default function ChangeStatusModal({
  value, setValue, open, onClose, idLead,
}) {
  const [status, setStatus] = useState('');
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  const changeStatusHandler = (id, status_id) => {
    dispatch(updateStatusThunk(id, status_id));
    setValue(!value);
    onClose();
  };
  const style = {
    box: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    },
    select: {
      width: '400px',
      height: '40px',
    },
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style.box}>
        <FormControl fullWidth>
          <select
            style={style.select}
            value={status}
            label={value}
            onChange={handleChange}
          >
            <option style={style.select} value="">Выберите статус</option>
            <option style={style.select} value={1}>Активный</option>
            <option style={style.select} value={3}>В работе</option>
            <option style={style.select} value={4}>Возврат</option>
            <option style={style.select} value={5}>Не актуально</option>
          </select>
        </FormControl>
        <Button variant="secondary" onClick={onClose}>Закрыть</Button>
        <Button variant="secondary" onClick={() => changeStatusHandler(idLead, status)}>Подтвердить</Button>
      </Box>
    </Modal>
  );
}
