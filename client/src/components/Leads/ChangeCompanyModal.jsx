import {useState} from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch} from 'react-redux';
import updateStatusThunk from '../../redux/thunks/updateStatusThunk';
// import addLeadThunk from '../../../redux/thunks/addLeadThunk';

export default function ChangeStatusModal ({ show, onHide, idLead}) {
const [status, setStatus] = useState('')
const dispatch = useDispatch()

const changeStatusHandler = (id, status_id) => {
  dispatch(updateStatusThunk(id, status_id))
  onHide()
}
const handleChange = (event) => {
  setStatus(event.target.value);
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
          Изменить статус лида
        </Modal.Title>
      </Modal.Header>
      <Modal.Body />
      <Form>
        <Form.Select aria-label="Default select example" value={status} onChange={handleChange}>
         <option>Выберите тип</option>
         <option value={1}>Активный</option>
         <option value={3}>В работе</option>
         <option value={4}>Возврат</option>
         <option value={5}>Неактивный</option>
        </Form.Select>
      </Form>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Закрыть</Button>
        <Button variant="secondary" onClick={()=> changeStatusHandler(idLead, status)}>Подтвердить</Button>
      </Modal.Footer>
    </Modal>
    )
}