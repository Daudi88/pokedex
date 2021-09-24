import React, { useEffect, useContext, useState } from "react";
import Routes from "./routes/Routes";
import "./App.css";

import PokemonAPIService from "./shared/api/service/PokemonAPIService";
import { PokemonContext } from "./shared/Provider/PokemonProvider";
import checkName from "./shared/functions/checkName";

const App = () => {
  const [serverData, setServerData] = useState([]);
  const [allPokemons, setAllPokemons] = useContext(PokemonContext);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (allPokemons.length < 1) {
      fetchData();
    }
  }, []);

  useEffect(() => {
    getFirstPokemon();
  }, [serverData]);

  useEffect(() => {
    if (counter < serverData?.length) {
      fetchPokemon(serverData[counter]);
    }
  }, [counter]);

  const fetchData = async () => {
    try {
      const { data } = await PokemonAPIService.getAllPokemons();
      setServerData(data.results);
      setCounter(0);
    } catch (error) {
      console.log(error);
    }
  };

  const getFirstPokemon = () => {
    if (serverData) {
      fetchPokemon(serverData[counter]);
    }
  };

  const fetchPokemon = async (result) => {
    try {
      const { data } = await PokemonAPIService.getPokemon(result.name);
      const pokemon = {
        name: checkName(data.name),
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

  return <Routes />;
};

export default App;
