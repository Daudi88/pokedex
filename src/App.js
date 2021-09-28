import React from "react";
import Routes from "./routes/Routes";
import PokemonProvider from "./shared/provider/PokemonProvider";
import "./shared/global/Styles.css";

const App = () => {
  const totalAmountOfPokemonsToGet = 898;
  return (
    <PokemonProvider totalAmountOfPokemonsToGet={totalAmountOfPokemonsToGet}>
      <Routes totalAmountOfPokemonsToGet={totalAmountOfPokemonsToGet} />
    </PokemonProvider>
  );
};

export default App;
