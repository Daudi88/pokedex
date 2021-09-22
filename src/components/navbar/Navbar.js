import React from "react";
import { useHistory } from "react-router";
import RoutingPath from "../../routes/RoutingPath";
import "./Navbar.css";

const Navbar = () => {
  const history = useHistory();
  return (
    <nav>
      <div className="navbar-container">
        <img
          className="brand"
          src="https://logos-world.net/wp-content/uploads/2020/05/Pokemon-Logo-700x394.png"
          alt="brand"
        />
        <div className="nav-links">
          <button
            className="btn nav-link pokedex"
            onClick={() => history.push(RoutingPath.pokedexView)}
          >
            <span className="nav-link-text">Pokédex</span>
          </button>
          <button
            className="btn nav-link details"
            onClick={() => history.push(RoutingPath.detailsView, 1)}
          >
            <span className="nav-link-text">Details</span>
          </button>
          <button
            className="btn nav-link about"
            onClick={() => history.push(RoutingPath.aboutView)}
          >
            <span className="nav-link-text">About</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
