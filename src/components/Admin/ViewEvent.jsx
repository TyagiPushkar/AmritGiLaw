// src/pages/Gallery.jsx

import React, { useEffect, useState } from 'react';
import Title from '../Title/Title';
import EventCard from '../EventCard/EventCard';
import axios from 'axios';
import { Button } from '@mui/material';

const ViewEvent = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('https://namami-infotech.com/AmritGi/get_events.php');
      if (response.data.success) {
        setEvents(response.data.events);
      } else {
        setError('Failed to fetch events.');
      }
    } catch (err) {
      setError('Error fetching events.');
    } finally {
      setLoading(false);
    }
  };

  const deleteEvent = async (eventName) => {
    try {
      const response = await axios.delete('https://namami-infotech.com/AmritGi/delete_event.php', {
        data: { name: eventName },
      });

      if (response.data.success) {
        setEvents((prevEvents) =>
          prevEvents.filter((event) => event.name !== eventName)
        );
        alert(response.data.message);
      } else {
        alert(response.data.message);
      }
    } catch (err) {
      alert('Error deleting event');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='campus' style={{ marginTop: '10px' }}>
    
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
        {events.map((event, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <EventCard images={event.photos} eventName={event.event_name} />
            
            <Button variant="contained" style={{ backgroundColor: "#a65320" }} onClick={() => deleteEvent(event.event_name)}>
          Delete Event
        </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewEvent;
