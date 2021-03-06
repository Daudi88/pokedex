import React, { createContext, useEffect, useState } from "react";
import PokemonAPIService from "../api/service/PokemonAPIService";
import checkName from "../functions/checkName";

export const PokemonContext = createContext();

const PokemonProvider = ({ children, totalAmountOfPokemonsToGet }) => {
  const [serverData, setServerData] = useState([]);
  const [counter, setCounter] = useState(0);
  const [allPokemons, setAllPokemons] = useState([]);

  useEffect(() => {
    if (allPokemons.length < 1) {
      fetchData();
    }
  }, []);

  useEffect(() => {
    if (counter < serverData?.length) {
      fetchPokemon(serverData[counter]);
    }
  }, [serverData, counter]);

  const fetchData = async () => {
    try {
      const { data } = await PokemonAPIService.getAllPokemons(
        totalAmountOfPokemonsToGet
      );
      setServerData(data.results);
      setCounter(0);
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
      setCounter(counter + 1);
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
