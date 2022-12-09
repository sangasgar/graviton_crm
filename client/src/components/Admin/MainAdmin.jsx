import React, {useState} from 'react'
import { Container, Button } from 'react-bootstrap';
import CreateCompany from './modals/CreateCompany';
import CreateLead from './modals/CreateLead'

export default function MainAdmin () {
    const [addLeadVisible, setAddLeadVisible] = useState(false)
    const [addCompanyVisible, setAddCompanyVisible] = useState(false)

    return (
        <Container className="d-flex flex-column justify-content-center">
          <Button variant="secondary" className="mt-2" onClick={() => setAddLeadVisible(true)}> Добавить лид</Button>
          <Button variant="secondary" className="mt-2" onClick={() => setAddCompanyVisible(true)}> Добавить компанию</Button>
          <CreateLead show={addLeadVisible} onHide={() => setAddLeadVisible(false)} />
          <CreateCompany show={addCompanyVisible} onHide={() => setAddCompanyVisible(false)} />
        </Container>
    )
}