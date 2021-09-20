import React from "react";
import UserProvider from "../../shared/Provider/UserProvider";
import Routes from "../../routes/Routes";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}

export default App;
