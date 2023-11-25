import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Container,
  Hidden,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import logo from '../../assets/logo.png';

const pages = ['Houses', 'Persons', 'Quotes'];

function Navigation() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position='static' color='transparent'>
      <Container maxWidth={false} sx={{ backgroundColor: "#d2d5d9"}}>
        <Toolbar disableGutters>
          <Box mr={2}>
            <NavLink to={`/`} key={'index'}>
              <img src={logo} className='logo' alt='Vite logo' width={300} />
            </NavLink>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <NavLink to={`/${page.toLowerCase()}`} key={page}>
                <Button sx={{ my: 2, color: 'black', fontFamily: 'roboto' }}>
                  {page}
                </Button>
              </NavLink>
            ))}
          </Box>

          <Hidden mdUp>
            <IconButton
              color='inherit'
              edge='end'
              onClick={handleClick}
              sx={{ marginLeft: 'auto' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='mobile-menu'
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleClose}>
                  <NavLink
                    to={`/${page.toLowerCase()}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {page}
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navigation;
