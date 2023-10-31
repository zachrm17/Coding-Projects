import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="logo" onClick={closeMobileMenu}>
            <img src="images/WOOLogo.png" alt="logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
            {/* {click ? "CLOSE" : "MENU"} Add this line */}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Leagues"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Leagues
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Schedules_Nov"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Schedules
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/SpecialEvents"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Specials
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                to="/Discord"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Discords
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                to="/ContentCreators"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Creators
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
