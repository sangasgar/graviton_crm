import { Routes, Route } from 'react-router-dom'
import Leads from './components/Leads/Leads';
import Navbar from './components/Navbar'
import { Container } from '@mui/system';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container" style={{marginTop: '100px'}}>
        <Container>
        <Routes>
          <Route path="/leads" element={<Leads/>}/>
        </Routes>
        </Container>
      </div>
    </div>
  );
}

export default App;
