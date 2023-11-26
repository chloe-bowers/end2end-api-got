import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Navigation from './components/organisms/Navigation';
import HousesPage from './pages/Houses/Houses';
import QuotesPage from './pages/Quotes/Quotes';
import PersonsPage from './pages/Persons/Persons';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = import.meta.env.VITE_ROOT_URL;

export default function App() {
  return (
    <Router>
      <Container maxWidth={false}>
        <Box sx={{ my: 4 }}>
          <Navigation />
          <Routes>
            <Route path={`${root}/`} element={<HousesPage />} />
            <Route path={`${root}/houses/*`} element={<HousesPage />} />
            <Route path={`${root}/quotes/*`} element={<QuotesPage />} />
            <Route path={`${root}/persons/*`} element={<PersonsPage />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}
