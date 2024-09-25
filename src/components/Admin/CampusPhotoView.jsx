import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, CircularProgress, Button } from '@mui/material';
import axios from 'axios';

const CampusPhotoView = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0); // Current index of the displayed image

  useEffect(() => {
    // Fetch campus images from the API
    axios
      .get('https://namami-infotech.com/AmritGi/get_campus_image.php')
      .then((response) => {
        setPhotos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
        setError('Error fetching photos');
        setLoading(false);
      });
  }, []);

  const deletePhoto = (photoId) => {
    axios
      .delete('https://namami-infotech.com/AmritGi/delete_campus_image.php', {
        data: { id: photoId },
      })
      .then(() => {
        setPhotos((prevPhotos) => prevPhotos.filter(photo => photo.id !== photoId));
        // Reset currentIndex if the deleted photo was the current one
        if (currentIndex >= photos.length - 1) {
          setCurrentIndex(currentIndex - 1);
        }
      })
      .catch((error) => {
        console.error('Error deleting photo:', error);
        setError('Error deleting photo');
      });
  };

  const nextPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" color="error" align="center">
        {error}
      </Typography>
    );
  }

  if (photos.length === 0) {
    return (
      <Typography variant="h6" align="center">
        No photos available.
      </Typography>
    );
  }

  return (
    <Container style={{ marginTop: '50px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Campus Photo Gallery
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center">
        <div className="carousel-container">
          <button className="carousel-button" onClick={prevPhoto} disabled={photos.length <= 1}>&#10094;</button>
          <div style={{ display: "block", alignItems: "center" }}>
            <img
              src={photos[currentIndex].photo_url}
              alt={`Campus Photo ${currentIndex + 1}`}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '10px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
              }}
            />
            <Button
              key={photos[currentIndex].id}
              variant="outlined"
              color="error"
              onClick={() => deletePhoto(photos[currentIndex].id)}
              style={{ margin: '0 8px' }}
            >
              Delete
            </Button>
          </div>
          <button className="carousel-button" onClick={nextPhoto} disabled={photos.length <= 1}>&#10095;</button>
        </div>
      </Box>
    </Container>
  );
};

export default CampusPhotoView;
