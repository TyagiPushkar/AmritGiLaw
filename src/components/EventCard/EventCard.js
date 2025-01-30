import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const EventCard = ({ images = [], eventName }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/event/${encodeURIComponent(eventName)}`);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '300px',
        height: '350px',
        padding: '10px',
        borderRadius: '10px',
        cursor: 'pointer'
      }}
      onClick={handleRedirect}
    >
      {images.length > 0 ? (
        <Box
          component="img"
          src={images[0]} // Display first image
          alt={eventName}
          sx={{
            width: '100%',
            height: '250px',
            objectFit: 'cover',
            borderRadius: '8px'
          }}
        />
      ) : (
        <Typography variant="body2" align="center">
          No image available
        </Typography>
      )}
      <Typography variant="h6" align="center" sx={{ marginTop: '8px' }}>
        {eventName}
      </Typography>
    </Box>
  );
};


export default EventCard;
