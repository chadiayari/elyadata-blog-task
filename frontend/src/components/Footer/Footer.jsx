import React from "react";
import styles from "./styles.css";

export default function Footer(props) {
  return (
    <footer className="footer">
      <div className="icons">
        <a href="https://www.facebook.com/chadi.ayari.1/" target="_blank">
          <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/ayari_chadi/" target="_blank">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/chadi-ayari-7a11a6157/"
          target="_blank"
        >
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/chadiayari" target="_blank">
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
      <div className="designed_by">
        <p>Designed & Built by Chadi Ayari</p>
      </div>
    </footer>
  );
}
