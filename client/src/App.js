/* eslint-disable react-hooks/exhaustive-deps */
import { Routes, Route, Navigate } from 'react-router-dom'
import Leads from './components/Leads/Leads';
import Navbar from './components/Navbar'
import { Container } from '@mui/system';
import Company from './components/Company/Company';
import DescriptionLead from './components/Leads/DescriptionLead';
import DescriptionCompany from './components/Company/DescriptionCompany';
import MainAdmin from './components/Admin/MainAdmin'
import SignInSide from './components/signIn';
import { useEffect } from 'react';
import checkUser from './redux/thunks/checkAuthThunk';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const user = useSelector((store) => store.user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkUser())
  }, [])
  return (
    <div className="App">
        <Container>
        {user.name ? <Navbar/> : null}
        <Routes>
          <Route path="/leads" element={user.name ? <Leads/> : <Navigate replace to="/" />}/>
          <Route path='/company' element={user.name ? <Company/> : <Navigate replace to="/" />}/>
          <Route path="/leads/:id" element={user.name ? <DescriptionLead/> : <Navigate replace to="/" />} />
          <Route path="/company/:id" element={user.name ? <DescriptionCompany/> : <Navigate replace to="/" />} />
          <Route path="/lk" element={user.name ? <MainAdmin/> : <Navigate replace to="/" />}/>
          <Route path="/" element={!user.name ? <SignInSide/> : <Navigate replace to="/leads" />}/>
        </Routes>
        </Container>
    </div>
  );
}

export default App;
