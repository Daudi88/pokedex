import React from "react";
import UserProvider from "../../shared/Provider/UserProvider";
import Routes from "../../routes/Routes";
import Footer from "../footer/Footer";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <Routes />
      <Footer />
    </UserProvider>
  );
}

export default App;
