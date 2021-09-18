import React, { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router";
import RoutingPath from "../../routes/RoutingPath";
import { UserContext } from "../../shared/Provider/UserProvider";
import "./SigninView.css";

function SigninView() {
  const location = useLocation();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
  const history = useHistory();

  function login(event) {
    const user = JSON.parse(localStorage.getItem("authenticatedUser"));
    if (user && username === user.username && password === user.password) {
      history.push(RoutingPath.pokedexView, "You are now signed in");
    } else {
      setShowErrorMessage(true);
      event.preventDefault();
    }
  }

  function register() {}

  return (
    <div className="view-wrapper">
      <h1>This is the Signin View!</h1>
      <p>{location.state}</p>
      <form className="signin-form">
        <input
          className="signin-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        ></input>
        <input
          className="signin-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <p style={{ display: showErrorMessage ? "block" : "none" }}>
          Login Details are wrong
        </p>
        <div className="btns">
          <button className="btn btn-login" onClick={login}>
            Login
          </button>
          <button className="btn btn-register" onClick={register}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default SigninView;
