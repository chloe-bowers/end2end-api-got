// File: src/components/atoms/Header.tsx

import { useState } from 'react';
import logo from '../../assets/jobcluster.svg';
import { AppBar, Box, Toolbar, Button, Container } from '@mui/material';
import HousesPage from '../../pages/houses';
const pages = ['Houses', 'Persons', 'Quotes'];

function ResponsiveAppBar() {
  const [selectedPage, setSelectedPage] = useState<string>('');

  const handlePageSelect = (page: string) => {
    setSelectedPage(page);
  };

  return (
    <>
      <AppBar position='static'>
        <Container maxWidth={false}>
          <Toolbar disableGutters>
            <Box mr={2}>
              <img src={logo} className='logo' alt='Vite logo' />
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handlePageSelect(page)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {selectedPage === 'Houses' && <HousesPage selectedPage={selectedPage} />}
    </>
  );
}

export default ResponsiveAppBar;
