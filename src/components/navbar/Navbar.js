import React from "react";
import { useHistory } from "react-router";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import RoutingPath from "../../routes/RoutingPath";
import "./Navbar.css";

function Navbar() {
  const history = useHistory();

  return (
    <nav>
      <CatchingPokemonIcon className="logo" fontSize="large" />
      <h1 className="brand">PoKéDex</h1>
      <button
        className="btn btn-nav"
        onClick={() =>
          history.push(RoutingPath.signinView, "You are logged out")
        }
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
