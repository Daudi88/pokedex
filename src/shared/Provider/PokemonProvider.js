import React, { createContext, useState } from "react";

export const PokemonContext = createContext();

function PokemonProvider({ children }) {
  const [pokemonFavorites, setPokemonFavorites] = useState();
  return (
    <PokemonContext.Provider value={[pokemonFavorites, setPokemonFavorites]}>
      {children}
    </PokemonContext.Provider>
  );
}

export default PokemonProvider;
