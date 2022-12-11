/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import { Modal, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import getAllCompanyThunk from '../../redux/thunks/getAllCompanyThunk';
import sendLeadThunk from '../../redux/thunks/sendLeadThunk';

export default function SendCompanyModal({ idLead, show, onHide }) {
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
    onHide();
    window.location.reload();
  };
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Выберите компанию
        </Modal.Title>
      </Modal.Header>
      <Modal.Body />
      <Box sx={{ minWidth: 100 }}>
        <FormControl style={{ margin: '0 30px', width: '90%' }}>
          <InputLabel>Список</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={company}
            label="company"
            onChange={handleChange}
          >
            {allCompany.map((el, index) => <MenuItem value={el?.id} key={index * el?.id}>{el?.name}</MenuItem>)}
          </Select>
        </FormControl>
      </Box>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Закрыть</Button>
        <Button variant="secondary" onClick={() => addLeadSendHandler(idLead, company)}>Подтвердить</Button>
      </Modal.Footer>
    </Modal>
  );
}
