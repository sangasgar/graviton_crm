import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {useState} from 'react'
import addCompanyThunk from '../../../redux/thunks/addCompanyThunk';


export default function CreateCompany ({ show, onHide}) {
const [name, setName] = useState('')
const [phone, setPhone] = useState('')
const [comment, setComment] = useState('')
const [email, setEmail] = useState('')
const dispatch = useDispatch()

const addCommentHandler = (name, phone, email, comment,) => {
  dispatch(addCompanyThunk(name, phone, email, comment,))
  onHide()
}
    return (
<Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить лид
        </Modal.Title>
      </Modal.Header>
      <Modal.Body />
      <Form>
        <Form.Control
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-2 border border-secondary"
          placeholder="Введите название"
        />
        
        <Form.Control
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mb-2 border border-secondary"
          placeholder="Введите телефон"
        />
         <Form.Control
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-2 border border-secondary"
          placeholder="Введите email"
        />
        <Form.Control
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="mb-2 border border-secondary"
          placeholder="Введите комментарий"
        />
      </Form>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Закрыть</Button>
        <Button variant="secondary" onClick={()=> addCommentHandler(name, phone, email, comment)}>Добавить</Button>
      </Modal.Footer>
    </Modal>
    )
}