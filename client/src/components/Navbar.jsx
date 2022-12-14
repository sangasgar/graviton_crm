import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar component="nav" style={{ backgroundColor: '#0dd6c9', color: 'black', fontFamily: 'Arial Black' }}>
      <Toolbar>
        <img style={{ width: '40px', paddingRight: '10px' }} src="../../img/logo.jpg" alt="" srcSet="" />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          Graviton CRM
        </Typography>
        <div style={{ marginRight: '25%', display: 'flex' }}>
          <div>
            <Link
              to="/leads"
              style={{
                fontSize: '20px', letterSpacing: '2px', color: 'black', margin: '3px', textDecoration: 'none',
              }}
            >
              Лиды
            </Link>
          </div>
          <div>
            <Link
              to="/company"
              style={{
                fontSize: '20px', letterSpacing: '2px', color: 'black', margin: '3px', textDecoration: 'none', marginLeft: '20px',
              }}
            >
              Компании
            </Link>
          </div>
        </div>
        <Link
          to="/lk"
          style={{
            fontSize: '20px', letterSpacing: '2px', color: 'black', margin: '3px', textDecoration: 'none',
          }}
        >
          Личный кабинет
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
