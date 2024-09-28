import React from 'react'
import { Link } from 'react-router-dom'
import { FaFilePdf } from "react-icons/fa";
import EPG from "../assets/EPG.jpg"
const CentralLib = ({ setPlayState }) => {
    const sectionStyle = {
    textAlign: 'center',
    padding: '40px 20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '10px',
    margin: '20px auto',
    maxWidth: '800px',
  };

  return (
    <div style={sectionStyle}>
        <div className="about-right" style={{marginTop:"50px"}}>
            <h2 style={{color:"#a65320"}}>On-Line Learning Resources</h2>
            <p style={{marginTop:"5px"}}>Many of the resources that the library buys for your use are accessible through the library's website. These materials include electronic books, article databases, and electronic journals. Electronic books and journals provide exactly the same information as their print forms. However, unlike their print counterparts you don't have to come to the library to use them -- you can access them anywhere you have an internet connection.</p>
            <h3 style={{color:"#a65320",fontSize:"25px"}}>E-Books</h3>
            <p style={{marginTop:"5px"}}>An electronic book (or e-book or eBook) is a book publication made available in digital form, consisting of text, images, or both, readable on the flat-panel display of computers or other electronic devices. Although sometimes defined as "an electronic version of a printed book", some e-books exist without a printed equivalent. E-books can be read on dedicated e-reader devices, but also on any computer device that features a controllable viewing screen, including desktop computers, latops, tablets and smartphones.</p>
            <Link to="https://namami-infotech.com/AmritGi/uploads/resources/ARBITRATION_And_CONCILIATION.pdf" style={{color:"blue",fontSize:"20px", fontWeight:"500", textDecoration:"underline"}} target='_blank'> Click here to see list of E-Books</Link>
          </div>
          <div className="about-right" style={{ marginTop: "50px" }}>
              <h3 style={{ color: "#a65320", fontSize: "25px" }}>Below are List of E-Books on Law & Downloadable in .pdf</h3>
              <br />
              <ul style={{listStyle:"none",textAlign:"start",display:"grid",gridTemplateColumns:"auto auto",gap:"10px"}}>
  <li><Link to="https://namami-infotech.com/AmritGi/uploads/resources/CompanyLaw.pdf" style={{color:"blue", fontSize:"20px", fontWeight:"400", textDecoration:"underline"}} target='_blank'>Company Law&nbsp; <FaFilePdf /> </Link></li>
  <li><Link to="https://namami-infotech.com/AmritGi/uploads/resources/ADMINISTRATIVE_LAW.pdf" style={{color:"blue", fontSize:"20px", fontWeight:"400", textDecoration:"underline"}} target='_blank'>Administrative Law&nbsp; <FaFilePdf /> </Link></li>
  <li><Link to="https://namami-infotech.com/AmritGi/uploads/resources/ANCIENT_LAW.pdf" style={{color:"blue", fontSize:"20px", fontWeight:"400", textDecoration:"underline"}} target='_blank'>Ancient Law&nbsp; <FaFilePdf /> </Link></li>
  <li><Link to="https://namami-infotech.com/AmritGi/uploads/resources/ARBITRATION_And_CONCILIATION.pdf" style={{color:"blue", fontSize:"20px", fontWeight:"400", textDecoration:"underline"}} target='_blank'>Arbitration and Conciliation&nbsp; <FaFilePdf /> </Link></li>
  <li><Link to="https://namami-infotech.com/AmritGi/uploads/resources/Law of Torts.pdf" style={{color:"blue", fontSize:"20px", fontWeight:"400", textDecoration:"underline"}} target='_blank'>Law of Torts&nbsp; <FaFilePdf /> </Link></li>
  <li><Link to="https://namami-infotech.com/AmritGi/uploads/resources/Constitutional Law.pdf" style={{color:"blue", fontSize:"20px", fontWeight:"400", textDecoration:"underline"}} target='_blank'>Constitution Law&nbsp; <FaFilePdf /> </Link></li>
  <li><Link to="https://namami-infotech.com/AmritGi/uploads/resources/Property Law.pdf" style={{color:"blue", fontSize:"20px", fontWeight:"400", textDecoration:"underline"}} target='_blank'>Property Law&nbsp; <FaFilePdf /> </Link></li>
  <li><Link to="https://namami-infotech.com/AmritGi/uploads/resources/LIMITATION_ACT.pdf" style={{color:"blue", fontSize:"20px", fontWeight:"400", textDecoration:"underline"}} target='_blank'>Limitation Case Law&nbsp; <FaFilePdf /> </Link></li>
  <li><Link to="https://namami-infotech.com/AmritGi/uploads/resources/International Law.pdf" style={{color:"blue", fontSize:"20px", fontWeight:"400", textDecoration:"underline"}} target='_blank'>International Law&nbsp; <FaFilePdf /> </Link></li>
  <li><Link to="https://namami-infotech.com/AmritGi/uploads/resources/Partnership_Law.pdf" style={{color:"blue", fontSize:"20px", fontWeight:"400", textDecoration:"underline"}} target='_blank'>Partnership Case Law&nbsp; <FaFilePdf /> </Link></li>
  <li><Link to="https://namami-infotech.com/AmritGi/uploads/resources/ARBITRATION_And_CONCILIATION.pdf" style={{color:"blue", fontSize:"20px", fontWeight:"400", textDecoration:"underline"}} target='_blank'>Labour Law&nbsp; <FaFilePdf /> </Link></li>
  <li><Link to="https://namami-infotech.com/AmritGi/uploads/resources/ARBITRATION_And_CONCILIATION.pdf" style={{color:"blue", fontSize:"20px", fontWeight:"400", textDecoration:"underline"}} target='_blank'>Negotiable Instrument Act&nbsp; <FaFilePdf /> </Link></li>
  <li><Link to="https://namami-infotech.com/AmritGi/uploads/resources/ARBITRATION_And_CONCILIATION.pdf" style={{color:"blue", fontSize:"20px", fontWeight:"400", textDecoration:"underline"}} target='_blank'>Principle of Taxation Law&nbsp; <FaFilePdf /> </Link></li>
  <li><Link to="https://namami-infotech.com/AmritGi/uploads/resources/ARBITRATION_And_CONCILIATION.pdf" style={{color:"blue", fontSize:"20px", fontWeight:"400", textDecoration:"underline"}} target='_blank'>Law of Banking&nbsp; <FaFilePdf /> </Link></li>
  <li><Link to="https://namami-infotech.com/AmritGi/uploads/resources/ARBITRATION_And_CONCILIATION.pdf" style={{color:"blue", fontSize:"20px", fontWeight:"400", textDecoration:"underline"}} target='_blank'>Law of Agency&nbsp; <FaFilePdf /> </Link></li>
  <li><Link to="https://namami-infotech.com/AmritGi/uploads/resources/ARBITRATION_And_CONCILIATION.pdf" style={{color:"blue", fontSize:"20px", fontWeight:"400", textDecoration:"underline"}} target='_blank'>Law of Contract Agency&nbsp; <FaFilePdf /> </Link></li>
  <li><Link to="https://namami-infotech.com/AmritGi/uploads/resources/ARBITRATION_And_CONCILIATION.pdf" style={{color:"blue", fontSize:"20px", fontWeight:"400", textDecoration:"underline"}} target='_blank'>Law of Contract&nbsp; <FaFilePdf /> </Link></li>
  <li><Link to="https://namami-infotech.com/AmritGi/uploads/resources/ARBITRATION_And_CONCILIATION.pdf" style={{color:"blue", fontSize:"20px", fontWeight:"400", textDecoration:"underline"}} target='_blank'>Contract Act&nbsp; <FaFilePdf /> </Link></li>
  <li><Link to="https://namami-infotech.com/AmritGi/uploads/resources/ARBITRATION_And_CONCILIATION.pdf" style={{color:"blue", fontSize:"20px", fontWeight:"400", textDecoration:"underline"}} target='_blank'>Civil Procedure Code&nbsp; <FaFilePdf /> </Link></li>
  <li><Link to="https://namami-infotech.com/AmritGi/uploads/resources/ARBITRATION_And_CONCILIATION.pdf" style={{color:"blue", fontSize:"20px", fontWeight:"400", textDecoration:"underline"}} target='_blank'>Specific Relief Act&nbsp; <FaFilePdf /> </Link></li>
  <li><Link to="https://namami-infotech.com/AmritGi/uploads/resources/ARBITRATION_And_CONCILIATION.pdf" style={{color:"blue", fontSize:"20px", fontWeight:"400", textDecoration:"underline"}} target='_blank'>Criminal Procedure Code&nbsp; <FaFilePdf /> </Link></li>
  <li><Link to="https://namami-infotech.com/AmritGi/uploads/resources/ARBITRATION_And_CONCILIATION.pdf" style={{color:"blue", fontSize:"20px", fontWeight:"400", textDecoration:"underline"}} target='_blank'>Evidence Law&nbsp; <FaFilePdf /> </Link></li>
  <li><Link to="https://namami-infotech.com/AmritGi/uploads/resources/ARBITRATION_And_CONCILIATION.pdf" style={{color:"blue", fontSize:"20px", fontWeight:"400", textDecoration:"underline"}} target='_blank'>Evidence Act&nbsp; <FaFilePdf /> </Link></li>
  <li><Link to="https://namami-infotech.com/AmritGi/uploads/resources/ARBITRATION_And_CONCILIATION.pdf" style={{color:"blue", fontSize:"20px", fontWeight:"400", textDecoration:"underline"}} target='_blank'>Jurisprudence&nbsp; <FaFilePdf /> </Link></li>
  <li><Link to="https://namami-infotech.com/AmritGi/uploads/resources/ARBITRATION_And_CONCILIATION.pdf" style={{color:"blue", fontSize:"20px", fontWeight:"400", textDecoration:"underline"}} target='_blank'>Hindu Law&nbsp; <FaFilePdf /> </Link></li>
  <li><Link to="https://namami-infotech.com/AmritGi/uploads/resources/ARBITRATION_And_CONCILIATION.pdf" style={{color:"blue", fontSize:"20px", fontWeight:"400", textDecoration:"underline"}} target='_blank'>Indian Penal Code&nbsp; <FaFilePdf /> </Link></li>
  <li><Link to="https://namami-infotech.com/AmritGi/uploads/resources/ARBITRATION_And_CONCILIATION.pdf" style={{color:"blue", fontSize:"20px", fontWeight:"400", textDecoration:"underline"}} target='_blank'>Indian Registration Act&nbsp; <FaFilePdf /> </Link></li>
  <li><Link to="https://namami-infotech.com/AmritGi/uploads/resources/ARBITRATION_And_CONCILIATION.pdf" style={{color:"blue", fontSize:"20px", fontWeight:"400", textDecoration:"underline"}} target='_blank'>Indian Trust Act&nbsp; <FaFilePdf /> </Link></li>
  <li><Link to="https://namami-infotech.com/AmritGi/uploads/resources/ARBITRATION_And_CONCILIATION.pdf" style={{color:"blue", fontSize:"20px", fontWeight:"400", textDecoration:"underline"}} target='_blank'>Indian Penal Code (I.P.C in Hindi)&nbsp; <FaFilePdf /> </Link></li>
  <li><Link to="https://namami-infotech.com/AmritGi/uploads/resources/ARBITRATION_And_CONCILIATION.pdf" style={{color:"blue", fontSize:"20px", fontWeight:"400", textDecoration:"underline"}} target='_blank'>Limitation Act&nbsp; <FaFilePdf /> </Link></li>
  <li><Link to="https://namami-infotech.com/AmritGi/uploads/resources/ARBITRATION_And_CONCILIATION.pdf" style={{color:"blue", fontSize:"20px", fontWeight:"400", textDecoration:"underline"}} target='_blank'>White Collar Crimes&nbsp; <FaFilePdf /> </Link></li>
  <li><Link to="https://namami-infotech.com/AmritGi/uploads/resources/ARBITRATION_And_CONCILIATION.pdf" style={{color:"blue", fontSize:"20px", fontWeight:"400", textDecoration:"underline"}} target='_blank'>Law of Pleadings (Hindi)&nbsp; <FaFilePdf /> </Link></li>
  <li><Link to="https://namami-infotech.com/AmritGi/uploads/resources/ARBITRATION_And_CONCILIATION.pdf" style={{color:"blue", fontSize:"20px", fontWeight:"400", textDecoration:"underline"}} target='_blank'>Labour Law - I&nbsp; <FaFilePdf /> </Link></li>
  <li><Link to="https://namami-infotech.com/AmritGi/uploads/resources/ARBITRATION_And_CONCILIATION.pdf" style={{color:"blue", fontSize:"20px", fontWeight:"400", textDecoration:"underline"}} target='_blank'>Labour Law - II&nbsp; <FaFilePdf /> </Link></li>
  <li><Link to="https://namami-infotech.com/AmritGi/uploads/resources/ARBITRATION_And_CONCILIATION.pdf" style={{color:"blue", fontSize:"20px", fontWeight:"400", textDecoration:"underline"}} target='_blank'>Indian Evidence Act (Hindi)   &nbsp; <FaFilePdf /> </Link></li>

              </ul>

          </div>
           <div className="about-right" style={{ marginTop: "50px" }}>
              <h3 style={{ color: "#a65320", fontSize: "25px" }}>e-PG Pathshala</h3>
              <br />
              <p>e-PG Pathshala is an initiative of the MHRD under its National Mission  on Education through ICT (NME-ICT) being executed by the UGC.</p> <br />
              <ul style={{ listStyle: "none", textAlign: "center", display: "grid", gridTemplateColumns: "auto", gap: "10px" }}>
                    <li><Link to="https://epgp.inflibnet.ac.in/" style={{color:"blue", fontSize:"20px", fontWeight:"400", textDecoration:"underline"}} target='_blank'> <img src={EPG} alt="" /> </Link></li>

              </ul>

          </div>
    </div>
  )
}

export default CentralLib
