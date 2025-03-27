import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  const heroImages = [
    "/KEV_7079.JPG",
    "/KEV_6995.JPG",
    "/KEV_7007.JPG",
  ];

  // Pick the first image as the initial background (you can rotate manually later)
  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL + heroImages[0]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '12px',
    padding: '60px 20px',
    textAlign: 'center',
    margin: '20px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Helvetica Neue, sans-serif'
  };

  return (
    <div className="hero-container" style={backgroundStyle}>
      <h1 className="hero-heading">
        Project Hoops is a community-focused nonprofit.
      </h1>

      <p className="hero-subtext">
        We organize annual basketball tournaments to unite players and promote
        youth empowerment across the Bay Area.
      </p>

      <img
        src="/IMG_6121.PNG"
        alt="Project Hoops"
        className="hero-image"
      />

      <div className="button-wrapper">
        <Link to="/signup">
          <button className="hero-button">
            Sign Up Now <span className="arrow">→</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
