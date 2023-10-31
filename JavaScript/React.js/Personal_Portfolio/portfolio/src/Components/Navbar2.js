import React from "react";
import "./Navbar2.css";

function Navbar2() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark custom-bg-color p-3">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          Zachary Mietzner
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
              <a class="nav-link mx-2" href="/about">
                About Me
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2" href="/projects">
                Projects
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;
