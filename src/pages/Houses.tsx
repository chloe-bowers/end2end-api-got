// File: src/components/pages/HousesPage.tsx

import React, { useEffect } from 'react';
import useFetchHouses from '../hooks/useFetchHouses';
import {
  Typography,
  CircularProgress,
  Paper,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';

interface HousesPageProps {
  selectedPage: string;
}

const HousesPage: React.FC<HousesPageProps> = ({ selectedPage }) => {
  const { houses, loading, error } = useFetchHouses();

  useEffect(() => {
    console.log('Houses data:', houses);
  }, [houses]);

  if (selectedPage !== 'Houses') {
    return null;
  }

  return (
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
      {loading && <CircularProgress />}
      {error && (
        <Typography color='error'>
          Error fetching houses: {error.message}
        </Typography>
      )}
      {houses.map((house) => (
        <Box key={house.slug}>
          <Typography variant='h5'>{house.name}</Typography>
          <List>
            {house.members.map((member) => (
              <ListItem key={member.slug}>
                <ListItemText primary={member.name} />
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </Paper>
  );
};

export default HousesPage;
