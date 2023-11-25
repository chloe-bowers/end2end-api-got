import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchFieldProps {
  onSearch: (query: string) => void;
}

const SearchField: React.FC<SearchFieldProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <TextField
      label='Search Houses'
      variant='outlined'
      fullWidth
      value={searchQuery}
      onChange={(e) => {
        setSearchQuery(e.target.value);
        onSearch(e.target.value);
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      style={{ marginBottom: '16px' }}
    />
  );
};

export default SearchField;
