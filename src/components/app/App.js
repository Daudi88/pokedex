import React from "react";
import Routes from "../../routes/Routes";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import PokemonProvider from "../../shared/Provider/PokemonProvider";
import "./App.css";

function App() {
  return (
    <PokemonProvider>
      <Routes>
        <Navbar />
        <Footer />
      </Routes>
    </PokemonProvider>
  );
}

export default App;
