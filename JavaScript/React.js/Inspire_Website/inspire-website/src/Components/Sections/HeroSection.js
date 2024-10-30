import React from "react";
import "./HeroSection.css";
import CarouselPhotos from "../CarouselPhotos";

function HeroSection() {
  return (
    <>
      <div className="hero-container">
        <img className="background-image" alt="background" loading="eager" />
        <img
          className="logo"
          src="/photos/logo.jpg"
          alt="logo"
          loading="eager"
        />
        <h1>Welcome!</h1>
        <h2>Serving Shakes, Teas, Coffee, Waffles, and more!</h2>
      </div>
    </>
  );
}

export default HeroSection;
