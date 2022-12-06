import { Routes, Route } from 'react-router-dom'
import Leads from './components/Leads/Leads';
import Navbar from './components/Navbar'
import { Container } from '@mui/system';
<<<<<<< HEAD
import Company from './components/Company/Company';
=======
>>>>>>> 307bc2c38e192a55c0e1366bd54b7c351327da1c

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container" style={{marginTop: '100px'}}>
        <Container>
        <Routes>
          <Route path="/leads" element={<Leads/>}/>
<<<<<<< HEAD
          <Route path="/company" element={<Company/>}/>
=======
>>>>>>> 307bc2c38e192a55c0e1366bd54b7c351327da1c
        </Routes>
        </Container>
      </div>
    </div>
  );
}

export default App;
