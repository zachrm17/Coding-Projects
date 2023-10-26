import React from "react";
import "./BCRL.css";

function BCRL() {
  return (
    <>
      <div class="bcrl-about-wrapper">
        <div class="bcrl-about-left">
          <div class="bcrl-about-left-content">
            <div>
              <div class="bcrl-shadow">
                <div class="bcrl-about-img">
                  <img src="images/bcrl.png" alt="league pic" />
                </div>
              </div>

              <h2>
                Wednesday,
                <br />
                Friday, & Saturday
              </h2>
            </div>
          </div>
        </div>

        <div class="bcrl-about-right">
          <h1>BCRL</h1>
          <h2>Racing Multiple WOO Series</h2>

          <div class="bcrl-about-para">
            <p>
              Banging Cushions is a competitive league on WOO that races
              multiple nights a week in multiple cars! Check out their website
              for more information as well!
            </p>

            <p>
              <a href="https://bcracingleague.weebly.com/">Website Link</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BCRL;
