import React, { useState,useRef } from 'react'

import About from '../components/About/About'
import VideoPlayer from '../components/VideoPlayer/VideoPlayer'
import next_icon from '../assets/next-icon.png'
import back_icon from '../assets/back-icon.png'
import gallery_1 from '../assets/op.jpg';
import gallery_2 from '../assets/aaa.jpg';
import gallery_3 from '../assets/yy.jpg';
import gallery_4 from '../assets/pdaaaa.jpeg';
import { useMediaQuery } from '@mui/material'
const AboutUs = () => {
      const isMobile = useMediaQuery('(max-width: 600px)'); // Detect mobile screen size

    const [playState, setPlayState] = useState(false);
const slider = useRef();
    let tx = 0;


    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`

    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
    }

    return (
      <>
        <div
          className="container"
          style={{ marginTop: isMobile ? "100px" : "100px" }}
        >
          <About setPlayState={setPlayState} />
          <div>
            <h3 style={{ color: "#f30202" }}>
              ABOUT AMRIT GROUP OF INSTITUTIONS
            </h3>
            <br />
            <p>
              Companies today are looking for visionaries who can create the
              future, and then execute with the speed and excellence it takes to
              succeed. The mission is to serve the society especially the rural,
              by providing state of the art teaching learning process.. Offering
              paramount quality technical staff and faculty.
            </p>
            <br />
            <p>
              1. Constantly adapting learning & instructional methodologies to
              remain at the forefront of education and aligned to the
              contemporary industry trends.
            </p>
            <p>2. Providing world class infrastructure and facility.</p>
            <p>
              3. Regular interaction with industry and interface with
              distinguished industry professionals.
            </p>
            <p>
              4. To organize continuing education programs regularly in order to
              keep the faculty and students abreast of every changing
              technology.
            </p>
            <p>
              5. To anticipate and fulfill the requirement of the students,
              industry and community by adopting best practices.
            </p>
            <p>
              6. To enhance the quality of life through R&D, team work and
              industry partnership.
            </p>
            <br />
            <h3>Our Core Values</h3>
            <br />
            <p>
              "Ethics, Simplicity, Integrity and trust are our Strength."Passion
              for Academic Excellence , Uncompromising Values, integrity. An
              Abiding Commitment to Improving quality of life in organizations
              and society ; those have been our guiding values at Amrit Group of
              College.
            </p>
            <br />
            <p>
              1. Demonstrate utmost integrity and transparency to all members of
              institution Inspire trust through leadership in all aspect of
              Engineering & Technology.
            </p>
            <p>
              2. Pursue excellence through consistence focus on Technical
              education quality.
            </p>
            <p>
              3. Exemplify our core values towards empowering life for all
              individuals of Amrit Group of College members
            </p>
            <br />
            <p>
              "Technology offers useful tools and we utilize them effectively.
              We feel "seeing is believing" so audio -visual aids like using
              power point slides for lectures, providing hand outs, showing
              video- clips to emphasize important points, and using multi-media
              effectives learning tools with proven impacts"
            </p>
          </div>
          <br />
          <div>
            <h2>Approval / Affiliation</h2>
            <br />
            <h3>Amrit Law College (PG)</h3>

            <p>
              Law College is Affiliated to{" "}
              <b>
                "Veer Madho Singh Bhandari Uttarakhand Technical University,
                Dehradun"
              </b>{" "}
              and <b> Bar Council of India, New Delhi.</b>
            </p>
            <br />
          </div>

          <div>
            <br />
            <h3>Amrit College of Education</h3>
            <p>
              Amrit College of Education provides Various Degree & Diploma
              Programmes affiliated from{" "}
              <b>
                {" "}
                Sri Dev Suman Uttarakhand University (SDSUC), Tehri Garhwal,
                Uttarakhand.
              </b>
            </p>{" "}
            <br />
          </div>
          <div>
            <br />
            <h3>Roorkee Degree College</h3>

            <p>
              Bachelor of Education (B.Ed.) Course is affiliated from{" "}
              <b>
                {" "}
                Hemwati Nandan Bahuguna Garhwal University (A Central University
                in Srinagar), Uttarakhand.
              </b>
            </p>
            <br />
          </div>
        </div>
        {/* <VideoPlayer playState={playState} setPlayState={setPlayState} /> */}
      </>
    );
}

export default AboutUs
