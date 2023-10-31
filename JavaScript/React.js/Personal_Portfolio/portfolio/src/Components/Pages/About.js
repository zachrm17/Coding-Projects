import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <>
      <div class="about-wrapper">
        <div class="about-left">
          <div class="about-left-content">
            <div>
              <div class="shadow">
                <div class="about-img">
                  <img src="./images/aboutme.jpg" alt="about_pic" />
                </div>
              </div>

              <h2>
                Zachary<br></br>Mietzner
              </h2>
              <h3>Developer</h3>
            </div>

            <ul className="icons">
              <li>
                <FontAwesomeIcon icon={faFacebookF} />
              </li>
              <li>
                <a href="https://github.com/zachrm17/Coding-Projects">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/zachary-mietzner-389979149/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faInstagram} />
              </li>
            </ul>
          </div>
        </div>

        <div class="about-right">
          <h1>
            Hello<span>!</span>
          </h1>
          <h2>Here's who I am & what I do</h2>
          <div class="about-btns">
            <button type="button" class="btn btn-red">
              resume
            </button>
            <button type="button" class="btn btn-white">
              projects
            </button>
          </div>

          <div class="about-para">
            <p>(about me here)</p>
            <p>(skills I have)</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
