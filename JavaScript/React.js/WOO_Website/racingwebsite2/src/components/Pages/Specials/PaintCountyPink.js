import React from "react";
import "./Specials.css";
import Footer from "../../Footer";

function PaintCountyPink() {
  return (
    <>
      <section className="hero">
        <div className="pink-heading">
          <h1>Paint the County Pink</h1>
        </div>
      </section>
      <div className="container">
        <div className="hero-content">
          <h2>FREE entry into the Lu'au at Limaland to the Winner!</h2>
          <h3>Date: October 29th (9:00est/8:00cst)</h3>
          <h4>Class: UMP Modifieds (Dec 4th):</h4>
          <h4>Track: Kenyon County</h4>
          <p>- Pink cars recommended!</p>
          <p>- NO Sign Ups required!</p>
          <p>- Presented by EDS</p>
          <br></br>
          <h4>Message CanOfNatty & Join EDS Discord to Race!</h4>
        </div>
        <div className="hero-image">
          <img src="images/paintcountypink.jpg" alt="luau" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PaintCountyPink;
