import React from "react";
import "../App.css";
// import { Button } from "./Button";
import "./MainSection.css";

function MainSection() {
  return (
    <div className="hero-container">
      <video src="videos/WebsiteVideo.mp4" autoPlay loop muted />
      <h1>WELCOME!</h1>
      <p>Explore Xbox leagues, creators, and special events!</p>
    </div>
  );
}

export default MainSection;
