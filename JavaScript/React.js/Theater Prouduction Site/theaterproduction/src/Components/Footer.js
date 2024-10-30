import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer class="text-center text-white bg-black">
        <div class="container p-4 pb-0 border-bottom">
          <section class="">
            <p class="d-flex justify-content-center align-items-center">
              <span class="me-3">
                <a href="/" class="no-style">
                  Home
                </a>
              </span>
              <span class="me-3">
                <a href="/productions" class="no-style">
                  Productions
                </a>
              </span>
              <span class="me-3">
                <a href="/about" class="no-style">
                  About
                </a>
              </span>
              <span class="me-3">
                <a href="/meetthecrew" class="no-style">
                  Staff
                </a>
              </span>
            </p>
          </section>
        </div>
        <div class="text-center p-3">Don't Quit Productions - 2024</div>
      </footer>
    </>
  );
}

export default Footer;
