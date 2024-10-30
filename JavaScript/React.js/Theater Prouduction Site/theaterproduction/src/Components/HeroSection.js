import React from "react";
import "./HeroSection.css";
// import { Button } from "./Button";

function HeroSection() {
  return (
    <div className="hero-container">
      <img
        className="background-image"
        src="/images/Site background pic.jpg"
        alt="background"
      />
      <h1>Taking sketch comedy shows to a whole new level!</h1>
      <h2>
        Creating and promoting the best and brightest sketch, improv, and
        variety shows in Chicago.
      </h2>

      <button type="button" class="btn btn-outline-dark btn-rounded">
        <a href="/productions">Current Productions</a>
      </button>

      <p>Check out our gallery below!</p>
    </div>
  );
}

export default HeroSection;
