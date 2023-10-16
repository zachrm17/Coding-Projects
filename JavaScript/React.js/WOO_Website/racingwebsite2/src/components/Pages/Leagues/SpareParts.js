import React from "react";
import "./SpareParts.css";

function SpareParts() {
  return (
    <>
      <div class="spareparts-about-wrapper">
        <div class="spareparts-about-left">
          <div class="spareparts-about-left-content">
            <div>
              <div class="spareparts-shadow">
                <div class="spareparts-about-img">
                  <img src="images/spareparts.png" alt="league pic" />
                </div>
              </div>

              <h2>
                Weeknights
                <br />
              </h2>
            </div>
          </div>
        </div>

        <div class="spareparts-about-right">
          <h1>Spare Parts</h1>
          <h2>Racing WOO & Wreckfest</h2>

          <div class="spareparts-about-para">
            <p>
              Frindly environment, a variety of cars/tracks, and racing almost
              every night? What more could a sim racer ask for! Great people and
              great racing await in Spare Parts!
            </p>
            <p>Owned by: CallMeKyle</p>
            <p>
              <a href="https://discord.gg/jHANFH8U66">Discord Link</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpareParts;
