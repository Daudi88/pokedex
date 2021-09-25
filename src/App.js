import React from "react";
import Routes from "./routes/Routes";
import PokemonProvider from "./shared/provider/PokemonProvider";
import "./shared/global/Styles.css";

const App = () => {
  return (
    <PokemonProvider>
      <Routes />
    </PokemonProvider>
  );
};

export default App;
