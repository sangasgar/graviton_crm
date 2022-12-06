import { Routes, Route } from 'react-router-dom'
import Leads from './components/Leads/Leads';
import Navbar from './components/Navbar'
import { Container } from '@mui/system';
import Company from './components/Company/Company';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container" style={{marginTop: '100px'}}>
        <Container>
        <Routes>
          <Route path="/leads" element={<Leads/>}/>
          <Route path="/company" element={<Company/>}/>
        </Routes>
        </Container>
      </div>
    </div>
  );
}

export default App;
