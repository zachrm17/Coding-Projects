import React from "react";
import "./LegalLimit.css";

function LegalLimit() {
  return (
    <>
      <div class="limit-about-wrapper">
        <div class="limit-about-left">
          <div class="limit-about-left-content">
            <div>
              <div class="limit-shadow">
                <div class="limit-about-img">
                  <img src="images/legallimit.jpg" alt="league pic" />
                </div>
              </div>

              <h2>
                Mondays, Thursday
                <br />& Friday
              </h2>
            </div>
          </div>
        </div>

        <div class="limit-about-right">
          <h1>Legal Limit Racing</h1>
          <h2>Racing Custom Setups</h2>

          <div class="limit-about-para">
            <p>
              Custom Setup League Racing UMP Modifieds on Mondays and Super Late
              Models on Thursdays. Also runs slider setup Midgets on Fridays.
            </p>
            <p>Owned by: SlideJob</p>
            <p>
              <a href="/">Discord Link</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LegalLimit;
