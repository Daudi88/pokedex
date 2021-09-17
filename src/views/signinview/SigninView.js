import React from "react";
import { useHistory, useLocation } from "react-router";
import RoutingPath from "../../routes/RoutingPath";
import "./SigninView.css";

function SigninView() {
  const location = useLocation();
  const history = useHistory();
  return (
    <div className="view-wrapper">
      <h1>This is the Signin View!</h1>
      <p>{location.state}</p>
      <button
        onClick={() =>
          history.push(RoutingPath.pokedexView, "You are now signed in")
        }
      >
        Sign In
      </button>
    </div>
  );
}

export default SigninView;
