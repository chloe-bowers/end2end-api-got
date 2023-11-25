import { NavLink } from 'react-router-dom';
import { AppBar, Box, Toolbar, Button, Container } from '@mui/material';
import logo from '../../assets/jobcluster.svg';

const pages = ['Houses', 'Persons', 'Quotes'];

function Navigation() {
  return (
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
  );
}

export default Navigation;
