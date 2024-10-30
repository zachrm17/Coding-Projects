import React from "react";
import "./AboutContent.css";

function ProductionsContent() {
  return (
    <>
      <section className="hero">
        <div className="heading">
          <h1>Current Productions</h1>
        </div>
      </section>

      <br></br>
      <div className="container">
        <div className="hero-content">
          <h2>The Propular Kidz</h2>
          <h3>Improv Comedy</h3>
          <h4>Blackout Carabet @ Second City</h4>
          <p>- Fridays @ 9:00pm</p>
          <p>- Nov. 1st through Nov. 29th</p>
          <button type="button" class="btn btn-outline-dark btn-rounded">
            <a href="https://www.secondcity.com/shows/chicago/the-propular-kidz-chi">
              TICKETS
            </a>
          </button>
        </div>
        <div className="hero-image">
          <img src="images/propkids_new.jpg" alt="propkiz" />
        </div>
      </div>

      <section className="hero">
        <div className="heading">
          <h1>Past Productions</h1>
        </div>
      </section>
      <br></br>
      <div className="container reverse-order">
        <div className="hero-image-left">
          <img src="images/1920x1080_YesAhh.png" alt="yesahh" />
        </div>
        <div className="hero-content">
          <h2>Yes AHHH!</h2>
          <h3>Improv Comedy</h3>
          <h4>Blackout Carabet @ Second City</h4>
        </div>
      </div>
      <br></br>
      <div className="container">
        <div className="hero-content">
          <h2>Puff, Puff, Laugh (Vol. 3)</h2>
          <h3>Sketch Comedy</h3>
          <h4>Judy's Beat Lounge @ Second City</h4>
        </div>
        <div className="hero-image">
          <img src="images/puffpuffvol3.png" alt="puffpuffposter" />
        </div>
      </div>
      <br></br>
      <div className="container reverse-order">
        <div className="hero-image-left">
          <img src="images/8.5x11_flyer.jpeg" alt="propkidz" />
        </div>
        <div className="hero-content">
          <h2>The Propular Kidz</h2>
          <h3>Improv Comedy</h3>
          <h4>Blackout Carabet @ Second City</h4>
        </div>
      </div>
      <br></br>
      <div className="container">
        <div className="hero-content">
          <h2>Puff, Puff, Laugh (Vol. 2)</h2>
          <h3>Sketch Comedy</h3>
          <h4>The Annoyance Theater</h4>
        </div>
        <div className="hero-image">
          <img src="images/puffpuffvol2.png" alt="puffpuffposter2" />
        </div>
      </div>
    </>
  );
}

export default ProductionsContent;
