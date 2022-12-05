import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const navItems = [{'name': 'Лиды', 'href': '/leads'}, {'name': 'Компании', 'href': '/company'}, {'name': 'Личный кабинет', 'href': '/lk'}];

function Navbar(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }}}
          >
            Leads Generator
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex',  } }}>
            {navItems.map((item) => (
              <Link to={item.href} key={item} style={{
                 fontSize: '20px', letterSpacing: '2px', color: 'white', margin: '3px'
              }}>
                {item.name}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
  );
}

export default Navbar;