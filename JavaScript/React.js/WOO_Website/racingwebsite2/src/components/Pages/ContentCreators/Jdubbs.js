import React from "react";
import "./Jdubbs.css";
import "./Slider.css";

function Slider() {
  return (
    <div className="wrapper">
      <div className="image-container">
        <div className="image">
          <img src="images/creatorpics/jdubbs/dubbdaddy.jpg" alt="img" />
        </div>
        <div className="image">
          <img src="images/creatorpics/jdubbs/ginger.jpg" alt="img" />
        </div>
        <div className="image">
          <img src="images/creatorpics/jdubbs/killswitch.jpg" alt="img" />
        </div>
        <div className="image">
          <img src="images/creatorpics/jdubbs/outlaw.jpg" alt="img" />
        </div>
      </div>
    </div>
  );
}

function Jdubbs() {
  return (
    <>
      <div class="jdubbs-about-wrapper">
        <div class="jdubbs-about-left">
          <div class="jdubbs-about-left-content">
            <div>
              <div class="jdubbs-shadow">
                <div class="about-img">
                  <img
                    src="images/creatorpics/jdubbs/jdubbsgraphics.png"
                    alt="creator pic"
                  />
                </div>
              </div>

              <h2>Content Creator</h2>
            </div>
          </div>
        </div>

        <div class="jdubbs-about-right">
          <h1>JDubbs Graphicz</h1>
          <h2>Driver Cards, Event Banners, Logos, & More!</h2>

          <div class="jdubbs-about-para">
            <p>
              Need a high quality driver card or event banner? Contact Jdubbs
              and get you a quality piece for a low price!
            </p>
            <p>Facebook: Joshua Wright - XBOX: jdubbs2225</p>
            <p>Check out some examples below!</p>
          </div>
          <Slider />
        </div>
      </div>
    </>
  );
}

export default Jdubbs;
