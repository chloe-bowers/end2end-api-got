import React from 'react';
import { Typography, Paper, List, ListItem } from '@mui/material';

import { useParams } from 'react-router-dom';
import { Person } from '../../hooks/useFetchPersons';

interface PersonDetailProps {
  persons: Person[];
}

const PersonDetail: React.FC<PersonDetailProps> = ({ persons }) => {
  const { personSlug } = useParams();

  const person = persons.find((p) => p.slug === personSlug);

  if (!person) {
    return <Typography variant='h5'>Person not found</Typography>;
  }

  return (
    <>
      <Typography variant='h5' pb={2}>
        {person.name}
      </Typography>
      <Typography variant='body1' pb={2}>
        House: {person.house?.name || 'Unknown'}
      </Typography>
      Quotes:
      <List>
        {person.quotes.map((quote, index) => (
          <ListItem key={index}>{quote}</ListItem>
        ))}
      </List>
    </>
  );
};

export default PersonDetail;
