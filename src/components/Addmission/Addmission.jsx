import React from 'react';
// import './Campus.css'; // Ensure your CSS file includes any necessary styles
import pdf from "../../assets/AMRIT LAW COLLEGE - ADMISSION FORM.pdf"
const Addmission = () => {
  // Inline styles for the download section and button
  const sectionStyle = {
    textAlign: 'center',
    padding: '40px 20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '10px',
    margin: '20px auto',
    maxWidth: '800px',
  };

  const buttonStyle = {
    display: 'inline-flex',
    padding: '14px 25px',
    backgroundColor: '#0056b3', // Adjust as needed
    color: '#fff',
    border: '0',
    outline:"0",
    borderRadius: '30px',
    cursor: 'pointer',
    textDecoration: 'none',
    fontSize: '16px',
    marginTop: '20px',
  };
   
  return (
    <section style={sectionStyle}>
      <h2>Download Admission Form</h2>
      <p>
        To apply for admission, please download and complete the admission form.
        Once completed, you can submit it through our online portal or by mail.
      </p>
      <a 
       className='btn'
        href={pdf} // Link to the PDF file
        target="_blank" // Opens in a new tab
        rel="noopener noreferrer" // Improves security
        style={buttonStyle}
      >
        Download Admission Form
      </a>
    </section>
  );
};

export default Addmission;
