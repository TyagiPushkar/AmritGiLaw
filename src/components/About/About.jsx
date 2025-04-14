import React from "react";
import "./About.css";
import about_img from "./image (1).png";
import about_img2 from "../../assets/CollegeBuilding.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-image">
          <img src={about_img} alt="About" className="about-img desktop-img" />
          <img
            src={about_img2}
            alt="About Mobile"
            className="about-img mobile-img"
          />
          <br />
        </div>

        <div className="about-text">
          <h3>ABOUT AMRIT GROUP OF INSTITUTIONS</h3>
          <p>
            AMRIT GROUP OF INSTITUTIONS was established in the year 2006, with
            the dynamic leadership of renowned Mr. Vikas Tyagi, Chairman AMRIT
            GROUP OF INSTITUTIONS, with the vision and mission of promoting
            quality education in the State of Uttarakhand, by providing
            professional education.
          </p>
          <p>
            The Institute has opened various higher educational
            institutes/Colleges granting education in the field of Law,
            Agriculture & Educational courses, by the names of:
          </p>
          <ul>
            <li>
              <Link to="/courses" style={{ color: "#366D5A" }}>
                ROORKEE DEGREE COLLEGE (Est. 2006)
              </Link>
            </li>
            <li>
              <Link to="/courses" style={{ color: "#366D5A" }}>
                AMRIT COLLEGE OF EDUCATION (Est. 2010)
              </Link>
            </li>
            <li>
              <Link to="/courses" style={{ color: "#366D5A" }}>
                AMRIT LAW COLLEGE (Est. 2012)
              </Link>
            </li>
          </ul>
        </div>
        <p className="pp">
          This institution is one of the most reputed educational institutions
          of Uttarakhand, serving the new generation by imparting quality
          education. The college site is akin to an island as it is built on
          grounds which have the Ganga canals and a rivulet surrounding the
          institute.
        </p>
      </div>
    </div>
  );
};

export default About;
