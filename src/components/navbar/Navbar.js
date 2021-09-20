import React, { useContext } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../shared/Provider/UserProvider";
import RoutingPath from "../../routes/RoutingPath";
import "./Navbar.css";

function Navbar() {
  const history = useHistory();
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

  function logout() {
    setAuthenticatedUser(false);
    sessionStorage.removeItem("pokemonId");
    history.push(RoutingPath.signinView, "You have logged out");
  }

  return (
    <nav>
      <img
        className="brand"
        src="https://logos-world.net/wp-content/uploads/2020/05/Pokemon-Logo-700x394.png"
        alt="brand"
      />
      <button
        style={{ display: authenticatedUser ? "inline-block" : "none" }}
        className="btn btn-nav"
        onClick={logout}
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
