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
                <a href="mailto:zmietzner17@gmail.com" target="_blank">
                  Email
                </a>
              </button>
            </p>
          </section>
        </div>

        <div class="text-center p-3">© 2023 - Devloped using React.js</div>
      </footer>
    </>
  );
}

export default Footer;
