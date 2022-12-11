/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable no-shadow */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import updateUserThunk from '../../../redux/thunks/updateuserThunk';

export default function UpdateUser({ show, onHide }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { id } = useSelector((store) => store.user);
  const updateUserHandler = (id, name, email, password) => {
    dispatch(updateUserThunk(id, name, email, password));
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
          Изменить данные
        </Modal.Title>
      </Modal.Header>
      <Modal.Body />
      <Form>
        <Form.Control
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-2 border border-secondary"
          placeholder="Введите новое имя"
        />

        <Form.Control
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-2 border border-secondary"
          placeholder="Введите новый телефон"
        />
        <Form.Control
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-2 border border-secondary"
          placeholder="Введите новый пароль"
        />
      </Form>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Закрыть</Button>
        <Button variant="secondary" onClick={() => updateUserHandler(id, name, email, password)}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
}
