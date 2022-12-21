/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable react/react-in-jsx-scope */
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { useDispatch } from 'react-redux';
import updateTypeLeadThunk from '../../redux/thunks/UpdateTypeLeadThunk';

export default function UpdateTypeLeadModal({
  value, setValue, open, onClose, idLead, allTypeLead,
}) {
  const [type, setType] = useState('Выберите тип');
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setType(event.target.value);
  };
  const updateTypeHandler = (id, typeLead) => {
    dispatch(updateTypeLeadThunk(id, typeLead));
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
            value={type}
            label={type}
            onChange={handleChange}
          >
            { allTypeLead.map((lead) => <option style={style.select} value={lead.id}>{lead.name}</option>) }
          </select>
        </FormControl>
        <Button variant="secondary" onClick={onClose}>Закрыть</Button>
        <Button variant="secondary" onClick={() => updateTypeHandler(idLead, type)}>Подтвердить</Button>
      </Box>
    </Modal>
  );
}
