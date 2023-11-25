import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ResponsiveAppBar from './components/atoms/Header';

export default function App() {
  return (
    <Container maxWidth={false}>
      <Box sx={{ my: 4 }}>
        <ResponsiveAppBar />
      </Box>
    </Container>
  );
}
