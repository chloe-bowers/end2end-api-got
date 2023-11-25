import React from 'react';
import {
  NavLink,
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import logo from '../../assets/jobcluster.svg';
import { AppBar, Box, Toolbar, Button, Container } from '@mui/material';
import HousesPage from '../../pages/Houses';
import QuotesPage from '../../pages/Quotes';

const pages = ['Houses', 'Persons', 'Quotes'];

function ResponsiveAppBar() {
  return (
    <Router>
      <AppBar position='static'>
        <Container maxWidth={false}>
          <Toolbar disableGutters>
            <Box mr={2}>
              <img src={logo} className='logo' alt='Vite logo' />
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <NavLink to={`/${page.toLowerCase()}`} key={page}>
                  <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                    {page}
                  </Button>
                </NavLink>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Routes>
        <Route path='/houses/*' element={<HousesPage />} />
        <Route path='/quotes/*' element={<QuotesPage />} />
      </Routes>
    </Router>
  );
}

export default ResponsiveAppBar;
