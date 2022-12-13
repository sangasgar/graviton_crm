/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import addCompanyThunk from '../../../redux/thunks/addCompanyThunk';

export default function CreateCompany({ show, onHide }) {
  const [nameCompany, setName] = useState('');
  const [phoneCompany, setPhone] = useState('');
  const [commentCompany, setComment] = useState('');
  const [emailCompany, setEmail] = useState('');
  const dispatch = useDispatch();

  const addCommentHandler = (name, phone, email, comment) => {
    dispatch(addCompanyThunk(name, phone, email, comment));
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
          Добавить компанию
        </Modal.Title>
      </Modal.Header>
      <Modal.Body />
      <Form>
        <Form.Control
          value={nameCompany}
          onChange={(e) => setName(e.target.value)}
          className="mb-2 border border-secondary"
          placeholder="Введите название"
        />

        <Form.Control
          value={phoneCompany}
          onChange={(e) => setPhone(e.target.value)}
          className="mb-2 border border-secondary"
          placeholder="Введите телефон"
        />
        <Form.Control
          value={emailCompany}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-2 border border-secondary"
          placeholder="Введите email"
        />
        <Form.Control
          value={commentCompany}
          onChange={(e) => setComment(e.target.value)}
          className="mb-2 border border-secondary"
          placeholder="Введите комментарий"
        />
      </Form>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Закрыть</Button>
        <Button variant="secondary" onClick={() => addCommentHandler(nameCompany, phoneCompany, emailCompany, commentCompany)}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
}
