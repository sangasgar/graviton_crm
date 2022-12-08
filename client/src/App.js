import { Routes, Route } from 'react-router-dom'
import Leads from './components/Leads/Leads';
import Navbar from './components/Navbar'
import { Container } from '@mui/system';
import Company from './components/Company/Company';
import DescriptionLead from './components/Leads/DescriptionLead';
import DescriptionCompany from './components/Company/DescriptionCompany';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container" style={{marginTop: '100px'}}>
        <Container>
        <Routes>
          <Route path="/leads" element={<Leads/>}/>
          <Route path='/company' element={<Company/>}/>
          <Route path="/leads/:id" element={<DescriptionLead/>} />
          <Route path="/company/:id" element={<DescriptionCompany/>} />
        </Routes>
        </Container>
      </div>
    </div>
  );
}

export default App;
