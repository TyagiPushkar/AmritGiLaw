import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({ setPlayState }) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        {/* <img src={play_icon} alt="" className='play-icon' onClick={() => { setPlayState(true) }} /> */}
      </div>
      <div className="about-right">
        <h3>ABOUT AMRIT GROUP OF INSTITUTIONS</h3>
        <h2></h2>
        <p>AMRIT GROUP OF INSTITUTIONS was established in the year 2006, with thedynamic leadership of renowned Mr.Vikas Tyagi, Chairman AMRIT GROUPF    INSTITUTIONS, with the vision and mission of promoting quality education in the State of Uttarakhand, by providing professional education. The Institute has opened various higher educational institutes/Colleges granting education in the field of Law, Agriculture & Educational courses, by the names of <br />
         <br /> ROORKEE DEGREE COLLEGE (Est. 2006), <br />AMRIT COLLEGE OF EDUCATION (Est. 2010), <br /> AMRIT LAW COLLEGE (Est. 2012), <br /> <br />
           now together as AMRIT GROUP OF INSTITUTIONS. This INSTITUTION is one of the most reputed educational Institutions of Uttarakhand is serving the new generation, society and nation by imparting best education from many years. The college site is akin to an island as it is built on grounds which have the ganga canals and a riverlet surrounding the institute.Themain aim of the institute is to provide an idyllic surropunding, pollution free rich environment promising value oriented and academically quality education.We had make a calm peaceful and healthy environment of the institution. Some more professional disciplines are likely to get started very soon.</p>
      </div>

    </div>
  )
}

export default About
