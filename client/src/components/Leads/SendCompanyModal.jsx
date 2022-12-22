/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import Modal from '@mui/material/Modal';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import * as React from 'react';
import { Button } from '@mui/material';
import getAllCompanyThunk from '../../redux/thunks/getAllCompanyThunk';
import sendLeadThunk from '../../redux/thunks/sendLeadThunk';

export default function SendCompanyModal({
  idLead, open, onClose, value, setValue,
}) {
  const [company, setCompany] = useState('');
  const dispatch = useDispatch();
  const allCompany = useSelector((store) => store.allCompany);
  React.useEffect(() => {
    dispatch(getAllCompanyThunk());
  }, []);
  const handleChange = (event) => {
    setCompany(event.target.value);
  };
  const addLeadSendHandler = (idLeads, comp) => {
    dispatch(sendLeadThunk(idLeads, comp));
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
      height: 150,
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
        <div style={style.select}><div style={style.p}>Выберите компанию</div></div>
        <FormControl sx={style.form}>
          <select style={style.select} onChange={handleChange}>
            <option>Выберите компанию</option>
            {allCompany.map((type) => <option value={type.id}>{type.name}</option>)}
          </select>
          <Button onClick={onClose}>Закрыть</Button>
          <Button onClick={() => addLeadSendHandler(idLead, company)}>Подтвердить</Button>
        </FormControl>
      </Box>
    </Modal>
  );
}
