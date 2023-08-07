import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Ryan Brenner
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/recipes"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Recipes
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/affiliates"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Affiliates
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/aboutme"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="https://open.spotify.com/playlist/36Sp6QeoQuaxjHfgqPxjMh?si=xkIpCza0QOeSZVtU-dDEug&fbclid=IwAR1YYhFrIF9kLavrzk8NdvtTbGajxAeSljy2rn48_tM673GaAGuC2WD7k_0&nd=1"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Gym Playlist
              </Link>
            </li>
            <li>
              <Link
                to="https://app.simplegoods.co/i/ATEOGCQX"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Purchase
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonStyle="btn--outline">BUY MY $5 RECIPE BOOK</Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
