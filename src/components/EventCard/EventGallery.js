import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Typography, Grid } from '@mui/material';

const EventGallery = () => {
  const { eventName } = useParams(); // Get event name from URL
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEventImages = async () => {
      try {
        const response = await axios.get("https://namami-infotech.com/AmritGi/get_events.php");

        if (response.data.success && Array.isArray(response.data.events)) {
          // Find event matching the eventName from URL
          const event = response.data.events.find(event => event.event_name === decodeURIComponent(eventName));

          if (event && Array.isArray(event.photos)) {
            setImages(event.photos);
          } else {
            setImages([]); // No images found for this event
            setError("No images available for this event.");
          }
        } else {
          setImages([]);
          setError("Failed to fetch event images.");
        }
      } catch (err) {
        setImages([]);
        setError("Error fetching images.");
      } finally {
        setLoading(false);
      }
    };

    fetchEventImages();
  }, [eventName]);

  if (loading) return <div>Loading images...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Box sx={{ padding: "20px", textAlign: "center" }} style={{ marginTop: "80px"  }}>
      <Typography variant="h4" sx={{ marginBottom: "20px" }}>
        {eventName}
      </Typography>

      {images.length > 0 ? (
        <Grid container spacing={2} justifyContent="center">
          {images.map((img, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Box
                component="img"
                src={img}
                alt={`Image ${index + 1}`}
                sx={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography>No images available.</Typography>
      )}
    </Box>
  );
};

export default EventGallery;
