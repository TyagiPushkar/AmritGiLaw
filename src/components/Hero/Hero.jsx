import React, { useState, useEffect } from "react";
import "./Hero.css";
import dark_arrow from "../../assets/white-arrow.png";
import pdf from "../../assets/AMRIT LAW COLLEGE - ADMISSION FORM.pdf";

const images = [
  require("../../assets/CollegeBuilding.png"),
 require("../../assets/about.jpeg"),
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="hero container"
     
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="notice">
        <div className="notice-content">
          <p>
            Admissions Open for batch 2025-2026. Fill admission form
            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue" }}
            >
              HERE
            </a>
          </p>
        </div>
      </div>
      <div className="hero-text">
        <h1>Believes in the all-round development of its students</h1>
        <p style={{ textAlign: "center" }}>
          and therefore leaves no stone unturned to ensure this.
        </p>
        <button
          className="btn"
          style={{ backgroundColor: "#a65320", color: "white" }}
        >
          Explore more{" "}
          <img src={dark_arrow} alt="" style={{ color: "white" }} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
