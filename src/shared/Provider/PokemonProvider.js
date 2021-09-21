import React, { createContext, useState } from "react";

export const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  return (
    <PokemonContext.Provider value={[pokemons, setPokemons]}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
