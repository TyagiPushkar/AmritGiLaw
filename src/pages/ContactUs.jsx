import React from 'react';
import Contact from '../components/Contact/Contact';
import {  FaPhone,FaEnvelope } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <>
      <div style={{ marginTop: "100px", minHeight: "500px" }}>
        <Contact />
         <div className="floating-icons1" style={{marginTop:"-50px"}}>
            <div style={{display:'flex', gap:"5px", alignItems:"center"}}>  <a href="mailto:vikastyagi77@yahoo.com" target="_blank" rel="noreferrer">
         <FaEnvelope /> 
        </a>
         vikastyagi77@yahoo.com
       
        </div>
          <div style={{display:'flex', gap:"5px", alignItems:"center"}}>  <a href="tel:+91-9718603456" target="_blank" rel="noreferrer">
          <FaPhone />
        </a>
         +91-9718603456
       
        </div>
           <div style={{display:'flex', gap:"5px", alignItems:"center"}}>  <a href="https://maps.app.goo.gl/NJRwnBsfpZB58k8TA" target="_blank" rel="noreferrer">
        <FaLocationDot/> 
        </a>
      Village & Posr Office: Dhanauri, <br /> Roorkee, Haridwar (U.K).
        </div>
        
        
      </div>
      </div>

      {/* Map Section */}
      
    </>
  );
};

export default ContactUs;
