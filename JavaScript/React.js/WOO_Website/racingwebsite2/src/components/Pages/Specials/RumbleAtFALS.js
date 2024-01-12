import React from "react";
import "./Specials.css";
import Footer from "../../Footer";

function RumbleAtFALS() {
  return (
    <>
      <section className="hero">
        <div className="rumble-heading">
          <h1>Rumble at Fairbury</h1>
        </div>
      </section>
      <div className="container">
        <div className="hero-content">
          <h2>$409 to Win Finale! - Presented by TwoThree Racing Series</h2>
          <h3>Dates: Feburary 22nd-24th</h3>
          <h4>Prelim Event (Feb 22nd):</h4>
          <p>UMP Modfieds</p>
          <p>- 100% Payback</p>
          <p>- Additional $100 to Winner!</p>
          <h4>Main Show (Feb 23rd-24th):</h4>
          <p>- Night 1: Qualifying, Heat Racing</p>
          <p>- Night 2: Alphabet Soup</p>
          <br></br>
          <h4>
            Message xLittrell23x & Join TwoThree's Rumble Discord to Sign Up!
          </h4>
        </div>
        <div className="hero-image">
          <img src="images/rumbleatfals.jpg" alt="luau" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RumbleAtFALS;
