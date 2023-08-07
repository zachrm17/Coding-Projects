import React from "react";
import "./AboutMeCard.css";

function AboutMeCard() {
  return (
    <>
      <div class="about-wrapper">
        <div class="about-left">
          <div class="about-left-content">
            <div>
              <div class="shadow">
                <div class="about-img">
                  <img src="images/biopic1.jpg" alt="bio pic" />
                </div>
              </div>

              <h2>
                Ryan
                <br />
                Brenner
              </h2>
            </div>
          </div>
        </div>

        <div class="about-right">
          <h1>Hello!</h1>
          <h2>Here's a little about me!</h2>

          <div class="about-para">
            <p>
              My name is Ryan Brenner and I am a 22 year old recent college
              graduate who has developed a passion for helping people reach
              their fitness goals. After losing 40 pounds and finally figuring
              out what I needed to do to reach my fitness goals, I started my
              social media pages to help others do the same. On my pages you
              will find tips, recipes, and educational content from what it took
              me to reach my prior fitness goals and my future goals as well.
              Thank you for following along with my journey, now let me help you
              with yours!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMeCard;
