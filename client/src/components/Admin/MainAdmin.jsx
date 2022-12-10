import React, {useState} from 'react'
import { Container, Button } from 'react-bootstrap';
import CreateCompany from './modals/CreateCompany';
import CreateLead from './modals/CreateLead'
import { Link } from 'react-router-dom';

export default function MainAdmin () {
    const [addLeadVisible, setAddLeadVisible] = useState(false)
    const [addCompanyVisible, setAddCompanyVisible] = useState(false)
    const clickHandler = () => {
      localStorage.removeItem('token')
      window.location.reload(); 
    }
  
    return (
        <Container className="d-flex flex-column justify-content-center">
          <Button variant="secondary" className="mt-2" onClick={() => setAddLeadVisible(true)}> Добавить лид</Button>
          <Button variant="secondary" className="mt-2" onClick={() => setAddCompanyVisible(true)}> Добавить компанию</Button>
          <CreateLead show={addLeadVisible} onHide={() => setAddLeadVisible(false)} />
          <CreateCompany show={addCompanyVisible} onHide={() => setAddCompanyVisible(false)} />
          <Link to='/' style={{
                 fontSize: '20px', letterSpacing: '2px', color: 'black', margin: '3px' 
              }} onClick={clickHandler}>
                Выйти
          </Link>
        </Container>
    )
}