import React from "react";
import "./Specials.css";
import Footer from "../../Footer";

function IceBreaker() {
  return (
    <>
      <section className="hero">
        <div className="icebreaker-heading">
          <h1>2nd Annual Ice Breaker</h1>
        </div>
      </section>
      <div className="container">
        <div className="hero-content">
          <h2>$500 Purse! - Presented by FCL</h2>
          <h3>Dates: Mid-January</h3>
          <h4>Class: UMP Modifieds (Dec 4th):</h4>
          <p>- Track TBD</p>
          <p>- $10 Per Driver/50 Entrants Total!</p>
          <br></br>
          <h4>Message KingGinger & Join FCL Discord to Sign Up Soon!</h4>
        </div>
        <div className="hero-image">
          <img src="images/icebreakerbanner.png" alt="luau" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default IceBreaker;
