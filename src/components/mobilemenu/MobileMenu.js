import React from "react";
import "./MobileMenu.css";

const MobileMenu = (props) => {
  const objectStyle = {
    transform: props.open ? "translateY(0)" : "translateY(-100%)",
  };

  return (
    <div className="mobile-menu-container">
      <div className="mobile-menu" style={objectStyle}>
        <a className="mobile-menu-item mobile-menu-pokedex">Pokédex</a>
        <a className="mobile-menu-item mobile-menu-details">Details</a>
        <a className="mobile-menu-item mobile-menu-about">About</a>
      </div>
    </div>
  );
};

export default MobileMenu;
