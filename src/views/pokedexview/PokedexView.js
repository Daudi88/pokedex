import React, { useContext, useEffect, useState } from "react";
import PokemonAPIService from "../../shared/api/service/PokemonAPIService";
import { PokemonContext } from "../../shared/Provider/PokemonProvider";
import checkName from "../../shared/functions/checkName";
import Card from "../../components/card/Card";
import Loader from "../../components/loader/Loader";
import "./PokedexView.css";

const PokedexView = () => {
  const [serverData, setServerData] = useState([]);
  const [pokemons, setPokemons] = useContext(PokemonContext);
  const [offset, setOffset] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setPokemons([]);
  }, []);

  useEffect(() => {
    fetchData();
  }, [offset]);

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
      const { data } = await PokemonAPIService.getPokemons(offset);
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

      setPokemons([...pokemons, pokemon]);
      setCounter(counter + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const displayData = () => {
    if (pokemons.length < 1) {
      return <Loader />;
    }
    return pokemons.map((pokemon, index) => (
      <Card
        key={index}
        img={pokemon.img}
        id={pokemon.id}
        name={pokemon.name}
        types={pokemon.types}
      />
    ));
  };

  return (
    <div className="view-container">
      <div className="heading-container">
        <h1>Welcome to the Pokedex!</h1>
      </div>
      <div className="body-container cards-container">{displayData()}</div>
      <div className="btn-container">
        <button
          className="btn btn-load-more"
          onClick={() => setOffset(offset + 12)}
        >
          Load more Pokémon
        </button>
      </div>
    </div>
  );
};

export default PokedexView;
