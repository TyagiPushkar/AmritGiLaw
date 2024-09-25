// src/pages/Gallery.jsx

import React, { useEffect, useState } from 'react';
import Title from '../components/Title/Title';
import EventCard from '../components/EventCard/EventCard';
import axios from 'axios';
import { useMediaQuery } from '@mui/material';

const Gallery = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const isMobile = useMediaQuery('(max-width: 600px)'); // Detect mobile screen size

  useEffect(() => {
    // Fetch event data from the API
    const fetchEvents = async () => {
      try {
        const response = await axios.get('https://namami-infotech.com/AmritGi/get_events.php');
        if (response.data.success) {
          setEvents(response.data.events); // Set the event data in state
        } else {
          setError('Failed to fetch events.');
        }
      } catch (err) {
        setError('Error fetching events.');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (error) {
    return <div>{error}</div>; // Show error if fetching fails
  }

  return (
    <div className='campus' style={{ marginTop: isMobile?"60px":"20px" }}>
      <Title subTitle='Gallery' title='Events Photos' />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "space-between" }}>
        {events.map((event, index) => (
          <EventCard key={index} images={event.photos} eventName={event.event_name} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
