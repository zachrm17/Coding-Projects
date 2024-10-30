import React from "react";
import "./AboutContent.css";

function AboutContent() {
  return (
    <>
      <section className="hero">
        <div className="heading">
          <h1>Don't Quit Productions</h1>
        </div>
      </section>
      <br></br>
      <div className="container">
        <div className="hero-content">
          <h2>About Us</h2>
          <p>
            Our Mission: At Don’t Quit Productions (DQP), our mission is to
            empower independent artists by providing them with opportunities to
            showcase their talent on platforms not typically accessible. Whether
            it's improv, sketch, or film - we believe everyone can be funny and
            create something spectacular. Our goal is to discover and nurture
            this talent, helping it shine.
          </p>
        </div>
        <div className="hero-image">
          <img src="images/logo.png" className="headshot" alt="DQP" />
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="container">
        <div className="hero-content">
          <h2>Contact Us</h2>
          <p>(630) 487-6252</p>
          <p>1124 W Wellington Ave Chicago IL 60657</p>
        </div>
      </div>
    </>
  );
}

export default AboutContent;
