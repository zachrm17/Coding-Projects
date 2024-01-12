import React from "react";
import "./TwoThree.css";

function TwoThree() {
  return (
    <>
      <div class="twothree-about-wrapper">
        <div class="twothree-about-left">
          <div class="twothree-about-left-content">
            <div>
              <div class="twothree-shadow">
                <div class="twothree-about-img">
                  <img src="images/twothree.jpg" alt="league pic" />
                </div>
              </div>

              <h2>
                Saturday &
                <br />
                Sundays
              </h2>
            </div>
          </div>
        </div>

        <div class="twothree-about-right">
          <h1>Two Three Racing League</h1>
          <h2>Racing Saturdays & Sundays</h2>

          <div class="twothree-about-para">
            <p>
              One of the most comptetive slider leagues on the game, Two Three
              offers some of the fastest racing action at every event! Racing
              UMP Mods and Super Late Models
            </p>
            <p>Owned by: xLittrell23x</p>
            <p>
              <a href="https://discord.gg/5SVS2AZvEf">Discord Link</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TwoThree;
