/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import addBalanceThunk from '../../redux/thunks/addBalanceThunk';

export default function AddBalanceModal({
  value, setValue, show, onHide, companyId,
}) {
  const [balance, setBalance] = useState('');
  const dispatch = useDispatch();
  const addBalanceHandler = (company_id, payment_sum) => {
    dispatch(addBalanceThunk(company_id, payment_sum));
    setValue(value + 1);
    onHide();
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
        <Form style={{ margin: '0 30px' }}>
          <Form.Control
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            className="mb-2 border border-secondary"
            placeholder="Введите сумму"
          />
        </Form>
      </Box>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Закрыть</Button>
        <Button variant="secondary" onClick={() => addBalanceHandler(companyId, balance)}>Подтвердить</Button>
      </Modal.Footer>
    </Modal>
  );
}
