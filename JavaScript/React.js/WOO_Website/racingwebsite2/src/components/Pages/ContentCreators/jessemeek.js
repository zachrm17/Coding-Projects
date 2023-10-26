import React from "react";
import "./JesseMeek.css";
import "./Slider.css";

function Slider() {
  return (
    <div className="wrapper">
      <div className="image-container">
        <div className="image">
          <img src="images/creatorpics/jessemeek/grass.jpg" alt="img" />
        </div>
        <div className="image">
          <img src="images/creatorpics/jessemeek/konnor.jpg" alt="img" />
        </div>
        <div className="image">
          <img src="images/creatorpics/jessemeek/sprite.jpg" alt="img" />
        </div>
        <div className="image">
          <img src="images/creatorpics/jessemeek/taylor.jpg" alt="img" />
        </div>
      </div>
    </div>
  );
}

function jessemeek() {
  return (
    <>
      <div class="jessemeek-about-wrapper">
        <div class="jessemeek-about-left">
          <div class="jessemeek-about-left-content">
            <div>
              <div class="jessemeek-shadow">
                <div class="about-img">
                  <img
                    src="images/creatorpics/jessemeek/bulldog.jpg"
                    alt="creator pic"
                  />
                </div>
              </div>

              <h2>Content Creator</h2>
            </div>
          </div>
        </div>

        <div class="jessemeek-about-right">
          <h1>Bulldog Graphics</h1>
          <h2>Driver Cards, Logos, Videos, & More!</h2>

          <div class="jessemeek-about-para">
            <p>
              Bulldog Graphics is a well known driver card designer for the WOO
              Community! They have crafted a large portfolio and even does real
              car/driver designs! Check out their FB page and message them for
              details!
            </p>
            <p>
              <a href="https://www.facebook.com/profile.php?id=61552915673701&mibextid=LQQJ4d">
                Facebook Page
              </a>
            </p>
            <p>Check out some examples below!</p>
          </div>
          <Slider />
        </div>
      </div>
    </>
  );
}

export default jessemeek;
