import React, { createContext, useEffect, useState } from "react";
import PokemonAPIService from "../api/service/PokemonAPIService";
import checkName from "../functions/checkName";
import calculateWeaknesses from "../functions/calculateWeaknesses";

export const PokemonContext = createContext();

const PokemonProvider = ({ children, totalAmountOfPokemonsToGet }) => {
  const [serverData, setServerData] = useState([]);
  const [serverDataCounter, setServerDataCounter] = useState(0);
  const [allPokemons, setAllPokemons] = useState([]);

  useEffect(() => {
    console.log(totalAmountOfPokemonsToGet);
    if (allPokemons.length < 1) {
      fetchData();
    }
  }, []);

  useEffect(() => {
    if (serverDataCounter < serverData?.length) {
      fetchPokemon(serverData[serverDataCounter]);
    }
  }, [serverData, serverDataCounter]);

  const fetchData = async () => {
    try {
      const { data } = await PokemonAPIService.getAllPokemons(
        totalAmountOfPokemonsToGet
      );
      setServerData(data.results);
      setServerDataCounter(0);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPokemon = async (result) => {
    try {
      const { data } = await PokemonAPIService.getPokemon(result.name);
      const pokemon = {
        name: checkName(data.species.name),
        id: data.id,
        img: data.sprites.other["official-artwork"].front_default,
        stats: data.stats,
        info: {
          height: data.height,
          weight: data.weight,
          abilities: data.abilities,
        },
        types: data.types,
      };

      setAllPokemons([...allPokemons, pokemon]);
      setServerDataCounter(serverDataCounter + 1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PokemonContext.Provider value={[allPokemons, setAllPokemons]}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
