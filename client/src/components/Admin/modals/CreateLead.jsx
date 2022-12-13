import {useState} from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import addLeadThunk from '../../../redux/thunks/addLeadThunk';
// import styles from './styles.module.css'

export default function Createlead ({ show, onHide}) {
const [name, setName] = useState('')
const [phone, setPhone] = useState('')
const [comment, setComment] = useState('')
const [typeLeadId, setTypeLeadId] = useState('')
const dispatch = useDispatch()

const addLeadHandler = (lead_name,lead_phone,comment,lead_type_id) => {
  dispatch(addLeadThunk(lead_name,lead_phone,comment,lead_type_id))
  onHide()
}
const handleChange = (event) => {
      setTypeLeadId(event.target.value);
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
          Добавить лид
        </Modal.Title>
      </Modal.Header>
      <Modal.Body />
      <Form>
        <Form.Select aria-label="Default select example" onChange={handleChange}>
         <option>Выберите тип</option>
         <option value={1}>Стандарт</option>
         <option value={2}>Стандарт+</option>
         <option value={3}>Премиум</option>
        </Form.Select>
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
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="mb-2 border border-secondary"
          placeholder="Введите комментарий"
        />
      </Form>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Закрыть</Button>
        <Button variant="secondary" onClick={()=> addLeadHandler(name, phone, comment, typeLeadId)}>Добавить</Button>
      </Modal.Footer>
    </Modal>
    )
}