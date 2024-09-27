import React from 'react';
import isac_img from '../assets/isac.jpg';
// import './ISAC.css';

const ISAC = ({ setPlayState }) => {
  return (
    <>
     <h3 className="about-title">
          Governing Body of Institute Student Activity Council
        </h3>
    <div className='about' style={{marginTop:"5px"}}>
      {/* Image section on top */}
      

      {/* Content section below image */}
      <div className="about-content">

        {/* Each section is a flex container */}
        <div className="about-section" style={{display:"flex", justifyContent:"space-between",alignItems:"center"}}>
          <h4>1. Patron</h4>
          <ul style={{textDecoration:"none"}}>
            <li>Dr. Jitendra Singh</li>
          </ul>
        </div>

        <div className="about-section" style={{display:"flex", justifyContent:"space-between",alignItems:"center"}}>
          <h4>2. Chairman</h4>
          <ul>
            <li>Mr. Aarif Qureshi</li>
          </ul>
        </div>

        <div className="about-section" style={{display:"flex", justifyContent:"space-between",alignItems:"center"}}>
          <h4>3. Members</h4>
          <ul >
            
            <li>Mr. Udit Agnihotri</li>
            <li>Mrs. Atul Verma</li>
            <li>Mr. Wasim Ahmad</li>
            <li>Mr. Aarif Qureshi</li>
            <li>Hemant Singh</li>
            
          </ul>
          <ul>
            <li>Dr. Jitendra Singh</li>
            <li>Dr. Irshad Khan</li>
            <li>Sirauddin</li>
            <li>Dr. Pritam Singh</li>
          </ul>
        </div>

        {/* Other sections follow similar structure */}
        <div className="about-section" style={{display:"flex", justifyContent:"space-between",alignItems:"center"}}>
          <h4>4. Student Members/Representatives</h4>
          <ul>
            <li>Mr. Anurag Chauhan</li>
            <li>Ms. Akansha Chaudhary (S.R)</li>
            <li>Mr. Vishal Kumar (S.R)</li>
            <li>Mr. Siddharth Nehra (S.R)</li>
            <li>Ms. Naina (S.R)</li>
            
          </ul>
          <ul>
            <li>Ms. Laxmi (S.R)</li>
            <li>Ms. Vandana Sharma (S.R)</li>
            <li>Rajeev Todi (S.R)</li>
            <li>Mr. Ujjwal</li>
          </ul>
        </div>

<div className="about-section" style={{display:"flex", justifyContent:"space-between",alignItems:"center"}}>
          <h4>5. Member Secretary</h4>
          <ul>
            <li>Mrs. Atul Verma</li>
          
            
          </ul>
         
        </div>

        {/* Add more sections as needed */}
      </div>
      <div className="about-image">
        <img src={isac_img} alt="ISAC" className='about-img' />
      </div>
    </div>
  </>
  )
}

export default ISAC;
