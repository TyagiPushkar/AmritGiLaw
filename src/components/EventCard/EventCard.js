import React, { useState } from 'react';
import { Box, Modal, Typography, IconButton, Grid } from '@mui/material';
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

const EventCard = ({ images, eventName }) => {
  const [gridOpen, setGridOpen] = useState(false);
  const [imageOpen, setImageOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Open & Close Functions
  const handleOpenGrid = () => setGridOpen(true);
  const handleCloseGrid = (event) => {
    event.stopPropagation(); // Prevent event bubbling
    setGridOpen(false);
  };
  const handleOpenImage = (index, event) => {
    event.stopPropagation(); // Prevent grid from closing
    setCurrentIndex(index);
    setImageOpen(true);
  };
  const handleCloseImage = () => setImageOpen(false);
  const handleNext = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  const handlePrev = () => setCurrentIndex((prevIndex - 1 + images.length) % images.length);

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
      onClick={handleOpenGrid}
    >
      {/* Display First Image */}
      <Box
        component="img"
        src={images[0]}
        alt={eventName}
        sx={{
          width: '100%',
          height: '250px',
          objectFit: 'cover',
          borderRadius: '8px'
        }}
      />
      <Typography variant="h6" align="center" sx={{ marginTop: '8px' }}>
        {eventName}
      </Typography>

      {/* GRID MODAL */}
      <Modal open={gridOpen} onClose={handleCloseGrid} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box
          sx={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            width: '80%',
            maxHeight: '80vh',
            overflowY: 'auto',
            position: 'relative',
            margin: 'auto'
          }}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          {/* Close Button (❌) */}
          <IconButton
            onClick={handleCloseGrid}
            sx={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              color: 'black'
            }}
          >
            <FaTimes />
          </IconButton>

          <Typography variant="h5" align="center" gutterBottom>
            {eventName}
          </Typography>

          <Grid container spacing={2} justifyContent="center">
            {images.map((img, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Box
                  component="img"
                  src={img}
                  alt={`Image ${index + 1}`}
                  sx={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                  onClick={(e) => handleOpenImage(index, e)}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Modal>

    <Modal 
  open={imageOpen} 
  onClose={handleCloseImage} 
  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
>
  <Box 
    sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      position: 'relative', 
      backgroundColor: 'rgba(0,0,0,0.8)', 
      padding: '10px', 
      borderRadius: '10px',
      width: 'auto',
      maxWidth: '90vw', // Modal width (90% of viewport width)
      maxHeight: '90vh', // Modal height (90% of viewport height)
    }}
  >
    {/* Close Button */}
    <IconButton 
      onClick={handleCloseImage} 
      sx={{ position: 'absolute', top: 10, right: 10, color: 'white' }}
    >
      <FaTimes />
    </IconButton>

    {/* Previous Button - Fixed Position */}
    <IconButton 
      onClick={handlePrev} 
      sx={{ 
        position: 'absolute', 
        left: '20px', // Keeps the button fixed
        top: '50%', 
        transform: 'translateY(-50%)',
        color: 'white' 
      }}
    >
      <FaArrowLeft />
    </IconButton>

    {/* Image Container */}
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '100%',
        maxHeight: '100%',
        width: 'auto',
        height: 'auto',
      }}
    >
      {/* Display Image */}
      <Box 
        component="img" 
        src={images[currentIndex]} 
        alt={`${eventName} ${currentIndex + 1}`} 
        sx={{ 
          maxWidth: '50%',  // Image won't exceed the container width
          maxHeight: '50%', // Image won't exceed the container height
          objectFit: 'cover', // Image fits within the container, maintaining aspect ratio
          borderRadius: '8px',
        }} 
      />
    </Box>

    {/* Next Button - Fixed Position */}
    <IconButton 
      onClick={handleNext} 
      sx={{ 
        position: 'absolute', 
        right: '20px', // Keeps the button fixed
        top: '50%', 
        transform: 'translateY(-50%)',
        color: 'white' 
      }}
    >
      <FaArrowRight />
    </IconButton>
  </Box>
</Modal>



    </Box>
  );
};

export default EventCard;
