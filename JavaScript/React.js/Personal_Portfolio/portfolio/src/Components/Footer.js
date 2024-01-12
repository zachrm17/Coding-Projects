import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer class="text-center text-white bg-black">
        <div class="container p-4 pb-0 border-bottom">
          <section class="">
            <p class="d-flex justify-content-center align-items-center">
              <span class="me-3">Contact Me:</span>
              <button type="button" class="btn btn-outline-light btn-rounded">
                <a
                  href="mailto:zmietzner17@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Email
                </a>
              </button>
              <button type="button" class="btn btn-outline-light btn-rounded">
                <a href="https://www.linkedin.com/in/zachary-mietzner-389979149/">
                  LinkedIn
                </a>
              </button>
            </p>
          </section>
        </div>

        <div class="text-center p-3">
          Developed in Late 2023 - Early 2024 using React.js
        </div>
      </footer>
    </>
  );
}

export default Footer;
