import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark custom-bg-color fixed-top p-3">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          Don't Quit Productions
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
            <li class="nav-item">
              <a class="nav-link mx-2" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2" href="/productions">
                Productions
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2" href="/about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2" href="/meetthecrew">
                Staff
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
