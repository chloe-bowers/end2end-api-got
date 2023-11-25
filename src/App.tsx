import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Navigation from './components/organisms/Navigation';
import HousesPage from './pages/Houses/Houses';
import QuotesPage from './pages/Quotes/Quotes';
import PersonsPage from './pages/Persons/Persons';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Container maxWidth={false}>
        <Box sx={{ my: 4 }}>
          <Navigation />
          <Routes>
            <Route path='/' element={<HousesPage />} />
            <Route path='/houses/*' element={<HousesPage />} />
            <Route path='/quotes/*' element={<QuotesPage />} />
            <Route path='/persons/*' element={<PersonsPage />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}
