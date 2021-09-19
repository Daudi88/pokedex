import React from "react";
import { useHistory } from "react-router";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import RoutingPath from "../../routes/RoutingPath";
import brand from "../../shared/img/brand.png";
import "./Navbar.css";

function Navbar() {
  const history = useHistory();

  return (
    <nav>
      {/* <CatchingPokemonIcon fontSize="large" /> */}
      <img className="brand" src={brand} alt="brand" />
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
