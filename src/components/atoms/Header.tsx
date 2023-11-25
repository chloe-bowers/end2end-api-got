import {
  NavLink,
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import logo from '../../assets/jobcluster.svg';
import { AppBar, Box, Toolbar, Button, Container } from '@mui/material';
import HousesPage from '../../pages/Houses/Houses';
import QuotesPage from '../../pages/Quotes/Quotes';
import PersonsPage from '../../pages/Persons/Persons';

const pages = ['Houses', 'Persons', 'Quotes'];

function ResponsiveAppBar() {
  return (
    <Router>
      <AppBar position='static'>
        <Container maxWidth={false}>
          <Toolbar disableGutters>
            <Box mr={2}>
              <NavLink to={`/`} key={'index'}>
                <img src={logo} className='logo' alt='Vite logo' />
              </NavLink>
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
        <Route path='/' element={<HousesPage />} />
        <Route path='/houses/*' element={<HousesPage />} />
        <Route path='/quotes/*' element={<QuotesPage />} />
        <Route path='/persons/*' element={<PersonsPage />} />
      </Routes>
    </Router>
  );
}

export default ResponsiveAppBar;
