import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-divider">
        <div className="footer-notch"></div>
      </div>
      <div className="footer-content">
        <p>©{year} Pokémon. TM, ®Nintendo.</p>
      </div>
    </footer>
  );
};

export default Footer;
