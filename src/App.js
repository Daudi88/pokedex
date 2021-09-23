import React from "react";
import PokemonProvider from "./shared/Provider/PokemonProvider";
import Routes from "./routes/Routes";
import Navbar from "./components/navbar/Navbar";
import Brand from "./components/brand/Brand";
import "./App.css";

const App = () => {
  return (
    <PokemonProvider>
      <Routes>
        <Brand />
        <Navbar />
      </Routes>
    </PokemonProvider>
  );
};

export default App;
