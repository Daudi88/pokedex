import React, { useEffect, useState } from "react";
import useWindowDimensions from "../../shared/hooks/useWindowDimensions";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  const { width } = useWindowDimensions();
  const [showPageUp, setShowPageUp] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    if (width < 960 && window.scrollY > 0) {
      setShowPageUp(true);
    } else {
      setShowPageUp(false);
    }
  };

  return (
    <footer>
      <div className="footer-divider">
        <div className="footer-notch"></div>
      </div>
      <div className="footer-container">
        <div className="footer-content">
          <h3 className="footer-title">The Pokémon Company</h3>
          <small>©{year} Pokémon. TM, ®Nintendo.</small>
        </div>
      </div>
      <button
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        className="btn-page-up"
        style={{ transform: showPageUp ? "translateY(0)" : "translateY(100%)" }}
      >
        <i className="fas fa-chevron-up fa-3x"></i>
      </button>
    </footer>
  );
};

export default Footer;
