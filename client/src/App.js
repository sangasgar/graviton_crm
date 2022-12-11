/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { Routes, Route, Navigate } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Container } from '@mui/system';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Leads from './components/Leads/Leads';
import Navbar from './components/Navbar';
import Company from './components/Company/Company';
import DescriptionLead from './components/Leads/DescriptionLead';
import DescriptionCompany from './components/Company/DescriptionCompany';
import MainAdmin from './components/Admin/MainAdmin';
import SignInSide from './components/signIn';
import checkUser from './redux/thunks/checkAuthThunk';

function App() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUser());
  }, []);
  return (
    <div className="App">
      <Container sx={{ mt: '5em' }}>
        {user.name ? <Navbar /> : null}
        <Routes>
          <Route path="/leads" element={user.name ? <Leads /> : <Navigate replace to="/" />} />
          <Route path="/company" element={user.name ? <Company /> : <Navigate replace to="/" />} />
          <Route path="/leads/:id" element={user.name ? <DescriptionLead /> : <Navigate replace to="/" />} />
          <Route path="/company/:id" element={user.name ? <DescriptionCompany /> : <Navigate replace to="/" />} />
          <Route path="/lk" element={user.name ? <MainAdmin /> : <Navigate replace to="/" />} />
          <Route path="/" element={!user.name ? <SignInSide /> : <Navigate replace to="/leads" />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
