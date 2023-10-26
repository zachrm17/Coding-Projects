import React from "react";
import "./VDL.css";

function VDL() {
  return (
    <>
      <div class="vdl-about-wrapper">
        <div class="vdl-about-left">
          <div class="vdl-about-left-content">
            <div>
              <div class="vdl-shadow">
                <div class="vdl-about-img">
                  <img src="images/vdl.jpg" alt="league pic" />
                </div>
              </div>

              <h2>
                Sundays &
                <br />
                Thursdays
              </h2>
            </div>
          </div>
        </div>

        <div class="vdl-about-right">
          <h1>VDL</h1>
          <h2>Custom Setups League</h2>

          <div class="vdl-about-para">
            <p>
              One of the top custom setup leagues on the game! If you're looking
              to test your setup against the best, this is the league for you!
              Always accepting new drivers and will help out with setups!
            </p>
            <p>
              <a href="https://discord.gg/ESZv8PDM">Discord Link</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default VDL;
