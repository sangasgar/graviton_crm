import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';



const navItems = [{'name': 'Лиды', 'href': '/leads'}, {'name': 'Компании', 'href': '/company'}, {'name': "Личный кабинет", 'href': '/lk'}];

function Navbar() {
  const clickHandler = () => {
    localStorage.removeItem('token')
    window.location.reload(); 
  }
  
  return (
      <AppBar component="nav" style={{backgroundColor: "#0dd6c9", color: 'black', fontFamily: 'Arial Black'}}>
        <Toolbar>
        <img style={{width: '40px', paddingRight: '10px'}} src="../../2022-12-05 22.55.12.jpg" alt="" srcset="" />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }}}
          >
            Graviton CRM
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex'} }} style={{display: 'flex', justifyContent: 'center'}}>
            {navItems.map((item) => (
              <Link to={item.href} key={item} style={{
                 fontSize: '20px', letterSpacing: '2px', color: 'white', margin: '3px' 
              }}>
                {item.name}
              </Link>
            ))}
            <Link to='/' style={{
                 fontSize: '20px', letterSpacing: '2px', color: 'white', margin: '3px' 
              }} onClick={clickHandler}>
                Выйти
              </Link>
          </Box>
        </Toolbar>
      </AppBar>
  );
}

export default Navbar;