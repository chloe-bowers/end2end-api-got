import React, { useEffect } from 'react';
import useFetchQuotes from '../../hooks/useFetchQuotes';
import {
  Typography,
  CircularProgress,
  Paper,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
} from '@mui/material';

const QuotesPage: React.FC = ({}) => {
  const { quotes, loading, error, refetch } = useFetchQuotes();

  useEffect(() => {
    refetch();
  }, []);

  const handleRefresh = () => {
    refetch();
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Typography variant='h5' pb={2}>
          Quotes
        </Typography>
        <Button variant='contained' color='inherit' onClick={handleRefresh}>
          Refresh
        </Button>
      </Box>
      {loading && <CircularProgress />}
      {error && (
        <Typography color='error'>
          Error fetching quotes: {error.message}
        </Typography>
      )}
      {quotes.map((quote, index) => (
        <Box key={index}>
          <Typography variant='h6'>{quote.character.name}</Typography>
          <List>
            <ListItem>
              <ListItemText primary={quote.sentence} />
            </ListItem>
          </List>
        </Box>
      ))}
    </Paper>
  );
};

export default QuotesPage;
