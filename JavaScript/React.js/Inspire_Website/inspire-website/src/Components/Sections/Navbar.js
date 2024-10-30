import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light custom-bg-color fixed-top p-3">
      <div class="container-fluid">
        <a class="custom-navbar-brand" href="/">
          Inspire Nutrition
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class=" collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto ">
            <li class="custom-nav-item">
              <a class="nav-link mx-2" href="/">
                Home
              </a>
            </li>
            <li class="custom-nav-item">
              <a class="nav-link mx-2" href="/menu">
                Menu
              </a>
            </li>
            <li class="custom-nav-item">
              <a class="nav-link mx-2" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
