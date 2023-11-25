// File: src/components/pages/HousesPage.tsx

import React, { useEffect } from 'react';
import useFetchHouses from '../hooks/useFetchHouses';
import { Link, Routes, Route } from 'react-router-dom';
import {
  Typography,
  CircularProgress,
  Paper,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import HouseDetail from './HouseDetail';

interface Member {
  name: string;
  slug: string;
}

interface House {
  slug: string;
  name: string;
  members: Member[];
}

export interface HousesProps {
  houses: House[];
}

const ListHouses: React.FC<HousesProps> = ({ houses }) => (
  <List>
    {houses.map((house) => (
      <ListItem key={house.slug}>
        <Link to={`/houses/${house.slug}`}>
          <ListItemText primary={house.name} />
        </Link>
      </ListItem>
    ))}
  </List>
);

const HousesPage: React.FC = () => {
  const { houses, loading, error } = useFetchHouses();

  useEffect(() => {}, [houses]);

  return (
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
      {loading && <CircularProgress />}
      {error && (
        <Typography color='error'>
          Error fetching houses: {error.message}
        </Typography>
      )}
      <Routes>
        <Route path='/:houseSlug' element={<HouseDetail houses={houses} />} />
        <Route path='/' element={<ListHouses houses={houses} />} />
      </Routes>
    </Paper>
  );
};

export default HousesPage;
