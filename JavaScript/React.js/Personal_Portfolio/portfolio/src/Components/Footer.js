import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              Ryan Brenner
            </Link>
          </div>
          <small class="website-rights">© 2023</small>
          <div class="social-icons">
            <Link
              class="social-icon-link instagram"
              to="https://www.instagram.com/yup.ryan/"
              target="insta"
              aria-label="Instagram"
            >
              <i class="faInstagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="https://www.youtube.com/@yupryan"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="https://twitter.com/ryanbrenner19"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link tiktok"
              to="https://www.tiktok.com/@yupryan"
              target="_blank"
              aria-label="TikTok"
            >
              <i class="fab fa-tiktok" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
