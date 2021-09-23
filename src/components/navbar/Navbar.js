import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import RoutingPath from "../../routes/RoutingPath";
import "./Navbar.css";

const Navbar = () => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    document.getElementById(location.pathname).focus();
  }, []);

  return (
    <nav className="navbar">
      <button
        id={RoutingPath.pokedexView}
        className="btn nav-link pokedex"
        onClick={() => history.push(RoutingPath.pokedexView)}
      >
        <p className="nav-link-text">Pokédex</p>
      </button>
      <button
        id={RoutingPath.detailsView}
        className="btn nav-link details"
        onClick={() => history.push(RoutingPath.detailsView, 1)}
      >
        <span className="nav-link-text">Details</span>
      </button>
      <button
        id={RoutingPath.aboutView}
        className="btn nav-link about"
        onClick={() => history.push(RoutingPath.aboutView)}
      >
        <span className="nav-link-text">About</span>
      </button>
    </nav>
  );
};

export default Navbar;
