import React from "react";
import { NavLink } from "react-router-dom";
import RoutingPath from "../../routes/RoutingPath";
import "./MenuMobile.css";

const MobileMenu = (props) => {
  const objectStyle = {
    transform: props.open ? "translateY(0)" : "translateY(-100%)",
  };

  return (
    <div className="mobile-menu-container">
      <div className="mobile-menu" style={objectStyle}>
        <NavLink
          to={RoutingPath.pokedexView}
          className="mobile-menu-item mobile-menu-pokedex"
          onClick={() => props.setOpen(false)}
        >
          Pokédex
        </NavLink>
        <NavLink
          to={RoutingPath.detailsView}
          className="mobile-menu-item mobile-menu-details"
          onClick={() => props.setOpen(false)}
        >
          Details
        </NavLink>
        <NavLink
          to={RoutingPath.aboutView}
          className="mobile-menu-item mobile-menu-about"
          onClick={() => props.setOpen(false)}
        >
          About
        </NavLink>
      </div>
    </div>
  );
};

export default MobileMenu;
