import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {
  Typography,
  CircularProgress,
  Paper,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import PersonDetail from './PersonDetail';
import SearchBar from '../../components/molecules/SearchField';
import useFetchPersons, { PersonsProps } from '../../hooks/useFetchPersons';

const root = import.meta.env.VITE_ROOT_URL;

const ListPersons: React.FC<PersonsProps> = ({ persons }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Typography variant='h5' pb={2}>
        Persons
      </Typography>
      <SearchBar onSearch={handleSearch} />
      <List>
        {filteredPersons.map((person) => (
          <ListItem key={person.slug}>
            <Link to={`${root}/persons/${person.slug}`}>
              <ListItemText
                primary={`${person.name} (${person.house?.name || 'Unknown'})`}
              />
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
};

const PersonsPage: React.FC = () => {
  const { persons, loading, error } = useFetchPersons();

  return (
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
      {loading && <CircularProgress />}
      {error && (
        <Typography color='error'>
          Error fetching persons: {error.message}
        </Typography>
      )}
      <Routes>
        <Route
          path='/:personSlug'
          element={<PersonDetail persons={persons} />}
        />
        <Route path='/' element={<ListPersons persons={persons} />} />
      </Routes>
    </Paper>
  );
};

export default PersonsPage;
