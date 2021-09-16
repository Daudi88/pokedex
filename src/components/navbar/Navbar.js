import React, { useState } from "react";
import { useHistory } from "react-router";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import RoutingPath from "../../routes/RoutingPath";
import "./Navbar.css";

function Navbar() {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const history = useHistory();

  return (
    <nav>
      <CatchingPokemonIcon
        style={{
          color: isMouseDown
            ? "var(--clr-accent-dark)"
            : isMouseOver
            ? "var(--clr-accent)"
            : "",
        }}
        className="logo"
        fontSize="large"
        onClick={() => history.push(RoutingPath.pokedexView)}
      />
      <h1
        onMouseOver={() => setIsMouseOver(true)}
        onMouseOut={() => setIsMouseOver(false)}
        onMouseDown={() => setIsMouseDown(true)}
        onMouseUp={() => setIsMouseDown(false)}
        onClick={() => history.push(RoutingPath.pokedexView)}
        className="brand"
      >
        PoKéDex
      </h1>
      <button
        className="nav-btn"
        onClick={() => history.push(RoutingPath.favoritesView)}
      >
        Favorites
      </button>
    </nav>
  );
}

export default Navbar;
