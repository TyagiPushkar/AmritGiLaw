// src/components/EventCard/EventCard.jsx

import React, { useState } from 'react';
import { Box, Modal, Typography, IconButton } from '@mui/material';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const EventCard = ({ images, eventName }) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = () => {
    setOpen(true);
    setCurrentIndex(0); // Reset to the first image when opening the modal
  };

  const handleClose = () => setOpen(false);
  const handleNext = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  const handlePrev = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

  return (
    <Box>
      <img 
        src={images[0]} // Display only the first image
        alt={eventName} 
        style={{ width: '400px', cursor: 'pointer' }} 
        onClick={handleOpen} 
      />
      <Typography variant="h6" align="center" style={{ marginTop: '8px' }}>
        {eventName}
      </Typography>

      {/* Modal for viewing all images related to the event */}
      <Modal
        open={open}
        onClose={handleClose}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            maxWidth: '50%', 
            maxHeight: '50%', 
            position: 'relative' 
          }}
        >
          {/* Previous Button */}
          <IconButton 
            onClick={handlePrev} 
            sx={{ position: 'absolute', left: '10px', zIndex: 10 }}
          >
            <FaArrowLeft />
          </IconButton>

          {/* Image to be displayed in the modal */}
          <Box 
            component="img" 
            src={images[currentIndex]} 
            alt={`${eventName} ${currentIndex + 1}`} 
            sx={{ 
              maxWidth: '100%', 
              maxHeight: '80%', 
              borderRadius: '8px', 
              boxShadow: 2 
            }} 
          />

          {/* Next Button */}
          <IconButton 
            onClick={handleNext} 
            sx={{ position: 'absolute', right: '10px', zIndex: 10 }}
          >
           
             <FaArrowRight />
          </IconButton>
        </Box>
      </Modal>
    </Box>
  );
};

export default EventCard;
