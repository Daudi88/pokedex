import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import RoutingPath from "../../../routes/RoutingPath";
import "./NavbarDesktop.css";

const Navbar = () => {
  const location = useLocation();
  const [isPokedexActive, setIsPokedexActive] = useState(false);
  const [isDetailsActive, setIsDetailsActive] = useState(false);
  const [isAboutActive, setIsAboutActive] = useState(false);

  useEffect(() => {
    switch (location.pathname) {
      case RoutingPath.detailsView:
        setIsPokedexActive(false);
        setIsAboutActive(false);
        setIsDetailsActive(true);
        break;
      case RoutingPath.aboutView:
        setIsPokedexActive(false);
        setIsDetailsActive(false);
        setIsAboutActive(true);
        break;
      default:
        setIsDetailsActive(false);
        setIsAboutActive(false);
        setIsPokedexActive(true);
        break;
    }
  }, [location]);

  const pokedexColors = {
    background: isPokedexActive && "var(--clr-red)",
    color: isPokedexActive && "#fff",
  };

  const detailsColors = {
    background: isDetailsActive && "var(--clr-green)",
    color: isDetailsActive && "#fff",
  };

  const aboutColors = {
    background: isAboutActive && "var(--clr-yellow)",
    color: isAboutActive && "#fff",
  };

  return (
    <nav className="navbar-desktop">
      <NavLink
        to={RoutingPath.pokedexView}
        className="nav-link nav-link-pokedex"
        style={pokedexColors}
        onClick={window.scrollTo(0, 0)}
      >
        <p className="nav-link-text">Pokédex</p>
      </NavLink>
      <NavLink
        to={RoutingPath.detailsView}
        className="nav-link nav-link-details"
        style={detailsColors}
        onClick={window.scrollTo(0, 0)}
      >
        <span className="nav-link-text">Details</span>
      </NavLink>
      <NavLink
        to={RoutingPath.aboutView}
        className="nav-link nav-link-about"
        style={aboutColors}
      >
        <span className="nav-link-text">About</span>
      </NavLink>
    </nav>
  );
};

export default Navbar;
