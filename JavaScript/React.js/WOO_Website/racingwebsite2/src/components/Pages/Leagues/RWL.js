import React from "react";
import "./RWL.css";

function RWL() {
  return (
    <>
      <div class="rwl-about-wrapper">
        <div class="rwl-about-left">
          <div class="rwl-about-left-content">
            <div>
              <div class="rwl-shadow">
                <div class="rwl-about-img">
                  <img src="images/rwl.png" alt="league pic" />
                </div>
              </div>

              <h2>
                Thursdays-
                <br />
                Fridays
              </h2>
            </div>
          </div>
        </div>

        <div class="rwl-about-right">
          <h1>RWL</h1>
          <h2>Runnin Wild League</h2>

          <div class="rwl-about-para">
            <p>
              Competitive league with a tight knit group of drivers racing Big
              Blocks, UMP Mods, and Late Models in early 2024!
            </p>
            <p>Owned by: Dylan14Z</p>
            <p>
              <a href="https://discord.gg/KXYrR35zgR">Discord Link</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RWL;
