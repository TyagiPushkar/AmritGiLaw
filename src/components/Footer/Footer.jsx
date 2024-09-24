import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <p>© 2024. Amrit Group of Institutions, Dhanauri, Roorkee, Haridwar (U.K). All Rights Reserved</p>
      <ul>
        <li><Link to="/login">Admin Login</Link></li>
      </ul>
    </div>
  )
}

export default Footer
