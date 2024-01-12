import React from "react";
import "./NightOwl.css";

function NightOwl() {
  return (
    <>
      <div class="nightowl-about-wrapper">
        <div class="nightowl-about-left">
          <div class="nightowl-about-left-content">
            <div>
              <div class="nightowl-shadow">
                <div class="nightowl-about-img">
                  <img src="images/nightowl.png" alt="league pic" />
                </div>
              </div>

              <h2>
                Fridays &
                <br />
                Saturdays
              </h2>
            </div>
          </div>
        </div>

        <div class="nightowl-about-right">
          <h1>Night Owl Racing League</h1>
          <h2>Racing Fridays & Saturdays</h2>

          <div class="nightowl-about-para">
            <p>
              One of the top slider leagues on the game, Night Owl offers some
              of the most comptetive racing action on the game! Racing UMP Mods
              and Super Late Models
            </p>
            <p>Owned by: RealTrevor5089</p>
            <p>
              <a href="https://discord.gg/xVpMBDHGbw">Discord Link</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NightOwl;
