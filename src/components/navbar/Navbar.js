import React from "react";
import { useHistory } from "react-router";
import RoutingPath from "../../routes/RoutingPath";
import "./Navbar.css";

const Navbar = () => {
  const history = useHistory();

  return (
    <nav>
      <img
        className="brand"
        src="https://logos-world.net/wp-content/uploads/2020/05/Pokemon-Logo-700x394.png"
        alt="brand"
        onClick={() => history.push(RoutingPath.pokedexView)}
      />
      {/* <button
        style={{ display: authenticatedUser ? "inline-block" : "none" }}
        className="btn btn-nav"
        onClick={logout}
      >
        Logout
      </button> */}
    </nav>
  );
};

export default Navbar;
