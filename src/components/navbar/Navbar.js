import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import RoutingPath from "../../routes/RoutingPath";
import "./Navbar.css";

const Navbar = () => {
  const history = useHistory();
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
    <nav className="navbar">
      <button
        className="btn nav-link pokedex"
        style={pokedexColors}
        onClick={() => history.push(RoutingPath.pokedexView)}
      >
        <p className="nav-link-text">Pokédex</p>
      </button>
      <button
        className="btn nav-link details"
        style={detailsColors}
        onClick={() => history.push(RoutingPath.detailsView, 1)}
      >
        <span className="nav-link-text">Details</span>
      </button>
      <button
        className="btn nav-link about"
        style={aboutColors}
        onClick={() => history.push(RoutingPath.aboutView)}
      >
        <span className="nav-link-text">About</span>
      </button>
    </nav>
  );
};

export default Navbar;
