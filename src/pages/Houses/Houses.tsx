// File: src/components/pages/HousesPage.tsx

import React, { useEffect, useState } from 'react';
import useFetchHouses, { House } from '../../hooks/useFetchHouses';
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
import SearchBar from '../../components/molecules/SearchField';

export interface HousesProps {
  houses: House[];
}

const ListHouses: React.FC<HousesProps> = ({ houses }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  const filteredHouses = houses.filter((house) =>
    house.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Typography variant='h5' pb={2}>
        Houses
      </Typography>
      <SearchBar onSearch={handleSearch} />
      <List>
        {filteredHouses.map((house) => (
          <ListItem key={house.slug}>
            <Link to={`/houses/${house.slug}`}>
              <ListItemText primary={house.name} />
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
};

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
