import React, { createContext, useState } from "react";

export const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  return (
    <PokemonContext.Provider value={[allPokemons, setAllPokemons]}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
