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
      <form className="signin-form">
        <input
          className="signin-input"
          type="text"
          placeholder="Username"
        ></input>
        <input
          className="signin-input"
          type="password"
          placeholder="Password"
        ></input>
        <button
          className="btn btn-signin"
          onClick={() =>
            history.push(RoutingPath.pokedexView, "You are now signed in")
          }
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SigninView;
