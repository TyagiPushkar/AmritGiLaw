import React from 'react';
import isac_img from '../assets/isac.jpg';
import "./ISAC.css"
const ISAC = ({ setPlayState }) => {
  return (
      <>
          <h2 className="about-title" style={{marginTop:"100px"}}>Institute Student Activity Council (ISAC)</h2>
      <h3 className="about-title" >
        Governing Body of Institute Student Activity Council
      </h3>
      <div className='about'>
        {/* Image section on top for mobile */}
       

        {/* Content section below image */}
        <div className="about-content">
          <div className="about-section" style={{display:"flex",justifyContent:"space-between"}}>
            <h4>1. Patron</h4>
            <ul>
              <li>Dr. Jitendra Singh</li>
            </ul>
          </div>

          <div className="about-section">
            <h4>2. Chairman</h4>
            <ul>
              <li>Mr. Aarif Qureshi</li>
            </ul>
          </div>

          <div className="about-section ">
            <h4>3. Members</h4>
            <ul>
              <li>Mr. Udit Agnihotri</li>
              <li>Mrs. Atul Verma</li>
              <li>Mr. Wasim Ahmad</li>
              <li>Mr. Aarif Qureshi</li>
              <li>Hemant Singh</li>
              <li>Dr. Jitendra Singh</li>
              <li>Dr. Irshad Khan</li>
              <li>Sirauddin</li>
              <li>Dr. Pritam Singh</li>
            </ul>
           
          </div>

          <div className="about-section">
            <h4>4. Student Members/Representatives</h4>
            <ul>
              <li>Mr. Anurag Chauhan</li>
              <li>Ms. Akansha Chaudhary (S.R)</li>
              <li>Mr. Vishal Kumar (S.R)</li>
              <li>Mr. Siddharth Nehra (S.R)</li>
              <li>Ms. Naina (S.R)</li>
               <li>Ms. Laxmi (S.R)</li>
              <li>Ms. Vandana Sharma (S.R)</li>
              <li>Rajeev Todi (S.R)</li>
              <li>Mr. Ujjwal</li>
            </ul>
           
          </div>

          <div className="about-section">
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
      <h3 className="about-title" style={{marginTop:"10px"}}>
        Sub – Council
      </h3>
      <div className='about'>
        {/* Image section on top for mobile */}
       

        {/* Content section below image */}
        <div className="about-content">
          <div className="about-section">
            <h4>1. Sports And Games Sub Council</h4>
            <ul>
              <li>Mr. Udit Agnihotri</li>
              <li>Dr. Bhoopendra Singh</li>
              <li>Mr. Wasim Ahmad</li>
              <li>Mr. Anurag Chauhan (S.R)</li>
            </ul>
          </div>

          <div className="about-section">
            <h4>2. Cultural Sub Council</h4>
            <ul>
              <li>Mrs. Atul Verma</li>
            </ul>
          </div>
<div className="about-section">
  <h4>3. Literary Sub Council</h4>
  <ul>
    <li>Mr. Wasim Ahmad</li>
    <li>Dr. Pritam Singh</li>
    <li>Dr. Bhoopendra Singh</li>
    <li>Mr. Vishal Kumar</li>
  </ul>
</div>

<div className="about-section">
  <h4>4. Technical Sub Council</h4>
  <ul>
    <li>Mr. Aarif Qureshi</li>
    <li>Dr. Samshad Ali</li>
    <li>Mr. Anil Kumar</li>
    <li>Mr. Anirudh Chaudhary (S.R)</li>
  </ul>
</div>

<div className="about-section">
  <h4>5. Digital Sub Council</h4>
  <ul>
    <li>Dr. Hemant Kumar</li>
    <li>Mr. Avinash Kumar Shukla</li>
    <li>Dr. Pritam Singh</li>
    <li>Mr. Siddharth Nehra</li>
    <li>Ms. Naina (S.R)</li>
  </ul>
</div>

<div className="about-section">
  <h4>6. Entrepreneurship Sub Council</h4>
  <ul>
    <li>Dr. Jitendra Singh</li>
    <li>Mr. Sirajuddin</li>
    <li>Dr. Irshad Khan</li>
    <li>Mr. Ankush Chauhan (S.R)</li>
    <li>Ms. Akansha Chaudhary (S.R)</li>
  </ul>
</div>

<div className="about-section">
  <h4>7. Community Service Sub Council</h4>
  <ul>
    <li>Mr. Sirajuddin</li>
    <li>Dr. Jitendra Singh</li>
    <li>Dr. Pritam Singh</li>
    <li>Ms. Laxmi (S.R)</li>
    <li>Ms. Naina (S.R)</li>
  </ul>
</div>

<div className="about-section">
  <h4>8. Innovation Sub Council</h4>
  <ul>
    <li>Dr. Irshad Khan</li>
    <li>Mr. Sahadev Singh Tomar</li>
    <li>Mrs. Atul Verma</li>
    <li>Mr. Vishal Kumar (S.R)</li>
    <li>Mr. Siddharth Nehra (S.R)</li>
  </ul>
</div>

<div className="about-section">
  <h4>9. SDG (Sustainable Development Goal) Sub Council</h4>
  <ul>
    <li>Dr. Pritam Singh</li>
    <li>Dr. Samshad Ali</li>
    <li>Dr. Bhoopendra Singh</li>
    <li>Ms. Vandana Sharma (S.R)</li>
    <li>Mr. Rajeev Todi (S.R)</li>
    <li>Mr. Ujjwal (S.R)</li>
  </ul>
</div>

<div className="about-section">
  <h4>10. Faculty Advisor</h4>
  <ul>
    <li>Dr. Jitendra Singh</li>
    <li>Dr. Hemant Harit</li>
  </ul>
</div>

<div className="about-section">
  <h4>11. Class Committee</h4>
  <ul>
    <li>Dr. Samshad Ali</li>
    <li>Mrs. Atul Verma</li>
    <li>Mr. Aarif Qureshi</li>
    <li>Dr. Bhoopendra Singh</li>
  </ul>
</div>

<div className="about-section">
  <h4>12. Course Committee</h4>
  <ul>
    <li>Dr. Pritam Singh</li>
    <li>Dr. Wasim Ahmad</li>
    <li>Mr. Sahadev Singh Tomar</li>
    <li>Mr. Sirajuddin</li>
  </ul>
</div>

          

          {/* Add more sections as needed */}
        </div>
        
      </div>
    </>
  );
}

export default ISAC;
