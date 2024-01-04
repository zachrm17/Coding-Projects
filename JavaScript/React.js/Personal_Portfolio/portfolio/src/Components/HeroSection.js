import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <>
      <div className="hero-container">
        <video src="/videos/herosectionvid.mp4" autoPlay loop muted />
        <h1>WELCOME</h1>
        <h2>I am Zach, and I am an aspiring developer!</h2>
        <p>
          Find out some information about me and my past experiences in the tabs
          above!
        </p>
      </div>
    </>
  );
}

export default HeroSection;
