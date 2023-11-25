// File: src/components/pages/HouseDetail.tsx

import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

import { HousesProps } from './Houses';

const HouseDetail: React.FC<HousesProps> = ({ houses }) => {
  const { houseSlug } = useParams();

  const house = houses.find((h) => h.slug === houseSlug);

  if (!house) {
    return <div>House not found</div>;
  }

  return (
    <>
      <Typography variant='h5'>{house.name}</Typography>
      <List>
        {house.members.map((member) => (
          <ListItem sx={{ display: 'list-item' }} key={member.slug}>
            <ListItemText primary={member.name} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default HouseDetail;
