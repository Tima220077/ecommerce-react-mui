import React from "react";
import "./Home.css"; // Assuming you've created a CSS file for this component
import img1 from "/Timka/Coding/redux-practice/src/img15.avif";
import ImageMasonry from "../components/Arrivals"; // Import your Masonry component

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-text">
          <h1 className="home-title">New Season Arrivals Just Dropped!</h1>
          <h3 className="home-subtitle">
            Discover the Latest Trends and Shop Now
          </h3>
          <a href="/products" className="home-cta">
            Explore Now
          </a>
        </div>
        <div className="home-image-container">
          <img src={img1} alt="Fashion trends" className="home-image" />
        </div>
      </div>
      <div className="arrivals-section">
        <h2>NEW ARRIVALS</h2>
        <div className="masonry-container">
          <ImageMasonry />
        </div>
      </div>
      <div className="see-all-button">
        <a
          href="/products"
          className="home-cta gradient-bg"
        >
          Explore Now
        </a>
      </div>
    </div>
  );
}

export default Home;
