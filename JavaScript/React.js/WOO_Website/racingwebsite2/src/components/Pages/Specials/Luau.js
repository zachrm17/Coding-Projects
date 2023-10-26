import React from "react";
import "./Specials.css";
import Footer from "../../Footer";

function Luau() {
  return (
    <>
      <section className="hero">
        <div className="luau-heading">
          <h1>The Lu'au at Limaland</h1>
        </div>
      </section>
      <div className="container">
        <div className="hero-content">
          <h2>$1795+ Purse! - Presented by SCRA</h2>
          <h3>Dates: December 4th-6th (8:15est/7:15cst)</h3>
          <h4>Prelim Events (Dec 4th):</h4>
          <p>- Pro Late Models</p>
          <p>- 360 Sprint Cars</p>
          <p>- Midgets</p>
          <p>- Street Stocks</p>
          <h4>Main Show (Dec 5th-6th):</h4>
          <p>- Night 1: Qualifying, Heat Racing, G-E Mains</p>
          <p>- Night 2: D-A Mains</p>
          <br></br>
          <h4>Message Jdubbs2225 & Join SCRA Discord to Sign Up!</h4>
        </div>
        <div className="hero-image">
          <img src="images/luau.jpg" alt="luau" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Luau;
