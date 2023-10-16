import React from "react";
import "./EDS.css";

function EDS() {
  return (
    <>
      <div class="eds-about-wrapper">
        <div class="eds-about-left">
          <div class="eds-about-left-content">
            <div>
              <div class="eds-shadow">
                <div class="eds-about-img">
                  <img src="images/eds.png" alt="league pic" />
                </div>
              </div>

              <h2>
                Sundays
                <br />
              </h2>
            </div>
          </div>
        </div>

        <div class="eds-about-right">
          <h1>EDS</h1>
          <h2>Racing Multiple WOO Series</h2>

          <div class="eds-about-para">
            <p>EST: 2023</p>
            <p>Owned by: CanOfNatty</p>
            <p>
              <a href="https://discord.gg/R3XSYsTcAF">Discord Link</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default EDS;
