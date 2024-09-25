// src/pages/Gallery.jsx

import React from 'react';
import Title from '../components/Title/Title';
import EventCard from '../components/EventCard/EventCard'; // Import the EventCard component
import gallery_1 from "../assets/B.ScAgriculture.png"
import gallery_2 from "../assets/BBALLB.jpeg"
import gallery_3 from "../assets/BScComputerScience.png"

const events = [
  { images: [gallery_1, gallery_2], name: 'Event 1' },
  { images: [gallery_3], name: 'Event 2' },
 
];

const Gallery = () => {
  return (
    <div className='campus' style={{ marginTop: "100px" }}>
      <Title subTitle='Gallery' title='Events Photos' />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "space-evenly" }}>
        {events.map((event, index) => (
          <EventCard key={index} images={event.images} eventName={event.name} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
