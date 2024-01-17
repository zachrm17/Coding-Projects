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
          {/* <video src="/videos/herosectionvid.mp4" autoPlay loop muted /> */}
          <img className="background-image" alt="background" loading="eager" />

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
              <h3>Developer &</h3>
              <h3>Tech Support</h3>
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
              <a href="https://www.linkedin.com/in/zachary-mietzner-389979149/overlay/1635547872644/single-media-viewer/?type=DOCUMENT&profileId=ACoAACPqsdkBScohOMJyKn8mNxD-VbA4DtEeyKc">
                resume
              </a>
            </button>
            <button type="button" class="btn btn-white">
              <a href="/projects">projects</a>
            </button>
          </div>

          <div class="about-para">
            <p>
              I graduated from Elmhurst University as a Student-Athlete with a
              Bachelor's in Computer Science in May 2021. Currently, I am
              employed at CME Group in Chicago with the role of Desktop Engineer
              II. I have a passion for Web Design and Development and have
              always enjoyed that aspect of programming more than anything else!
              I have designed websites since I was in high school for
              personal/limited use, but have continued to do so in my post grad
              years. Recently, I have worked with frameworks like React.js and
              Next.js to further my knowledge. Other projects in languages such
              as Java, Python, and C++ I have worked on in my education and post
              grad can be viewed in the 'Projects' tab or on my GitHub page!
            </p>
            <p>
              Experience in the following: Java, React.js, HTML/CSS, Python, C++
            </p>
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
