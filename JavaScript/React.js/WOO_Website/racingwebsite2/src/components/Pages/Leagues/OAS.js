import React from "react";
import "./OAS.css";

function OAS() {
  return (
    <>
      <div class="oas-about-wrapper">
        <div class="oas-about-left">
          <div class="oas-about-left-content">
            <div>
              <div class="oas-shadow">
                <div class="oas-about-img">
                  <img src="images/oas.jpg" alt="league pic" />
                </div>
              </div>

              <h2>
                Mondays-
                <br />
                Wednesdays
              </h2>
            </div>
          </div>
        </div>

        <div class="oas-about-right">
          <h1>Oceaiana All Stars</h1>
          <h2>Austrilian Based WOO League</h2>

          <div class="oas-about-para">
            <p>
              For those folks down under, OAS provides a league for those who
              want to league race, but want to at good times! OAS runs on
              Mondays, Wednesdays, and Thursdays!
            </p>
            <p>Owned by: Driver48</p>
            <p>
              <a href="https://www.facebook.com/groups/609301880581892">
                Facebook Group Link
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OAS;
