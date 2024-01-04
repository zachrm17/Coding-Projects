import React from "react";
import "./AboutContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faJava,
  faJs,
  faCss3,
  faHtml5,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

function AboutContent() {
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
                <a href="https://github.com/zachrm17/Coding-Projects">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/zachary-mietzner-389979149/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
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
              <a href="/projects">projects</a>
            </button>
          </div>

          <div class="about-para">
            <p>(about me here)</p>
            <p>(skills I have)</p>
          </div>

          <ul className="icons-right">
            <li>
              <FontAwesomeIcon icon={faJava} />
            </li>
            <li>
              <FontAwesomeIcon icon={faJs} />
            </li>
            <li>
              <FontAwesomeIcon icon={faCss3} />
            </li>
            <li>
              <FontAwesomeIcon icon={faHtml5} />
            </li>
            <li>
              <FontAwesomeIcon icon={faPython} />
            </li>
            <li className="cplusplus">
              <img src="./images/c++.png" alt="c++" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default AboutContent;
