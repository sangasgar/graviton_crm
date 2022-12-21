/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable react/react-in-jsx-scope */
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import getTypeLeadThunk from '../../redux/thunks/getTypeLeadThunk';

export default function UpdateTypeLeadModal({
  value, setValue, open, onClose, idLead,
}) {
  const [type, setType] = useState('');
  const allTypeLead = useSelector((store) => store.allTypeLead);
  //   const dispatch = useDispatch();
  const handleChange = (event) => {
    setType(event.target.value);
  };
  useEffect(() => {
    getTypeLeadThunk();
  }, []);
  const updateTypeHandler = (id, typeLead) => {
    console.log(id, typeLead);
    // dispatch(updateTypeLeadThunk(id, typeLead));
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
            label={value}
            onChange={handleChange}
          >
            { allTypeLead.map((lead) => <option style={style.select} value={lead.id}>{lead.name}</option>)}
          </select>
        </FormControl>
        <Button variant="secondary" onClick={onClose}>Закрыть</Button>
        <Button variant="secondary" onClick={() => updateTypeHandler(idLead, type)}>Подтвердить</Button>
      </Box>
    </Modal>
  );
}
