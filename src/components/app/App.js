import React from "react";
import PokemonProvider from "../../shared/Provider/PokemonProvider";
import Navbar from "../navbar/Navbar";
import Routes from "../../routes/Routes";
import "./App.css";

const App = () => {
  return (
    <PokemonProvider>
      <Routes />
    </PokemonProvider>
  );
};

export default App;
