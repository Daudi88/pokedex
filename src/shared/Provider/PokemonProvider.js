import React, { createContext, useState } from 'react'

export const PokemonContext = createContext()

function PokemonProvider({children}) {
    const [pokemonId, setPokemonId] = useState();
    return (
        <PokemonContext.Provider value={[pokemonId, setPokemonId]}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider
