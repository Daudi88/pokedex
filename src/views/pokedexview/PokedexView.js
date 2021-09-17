import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Card from "../../components/card/Card";
import "./PokedexView.css";

function getSessionStorageOrDefault() {
  const stored = sessionStorage.getItem("pokemonId");
  if (stored) {
    return JSON.parse(stored);
  } else {
    return 1;
  }
}

function PokedexView() {
  const [pokemonId, setPokemonId] = useState(getSessionStorageOrDefault());
  const API_URL = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  const API_DESC_URL = `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`;
  const [pokemon, setPokemon] = useState({
    name: "", // name
    id: "", // id
    img: "", // sprites.other.official-artwork.front_default
    description: "", // flavor_text_entries[0].flavor_text
  });

  useEffect(() => {
    getPokemon();
    return () => {};
  }, [pokemonId]);

  async function getPokemon() {
    try {
      const res = await axios.get(API_URL);
      setPokemon({
        name: res.data.name,
        id: res.data.id,
        img: res.data.sprites.other["official-artwork"].front_default,
      });

      const descRes = await axios.get(API_DESC_URL);
      const englishEntry = 1;
      setPokemon((prevValues) => {
        return {
          ...prevValues,
          description: descRes.data.flavor_text_entries[
            englishEntry
          ].flavor_text.replace("\u000c", " "),
        };
      });

      sessionStorage.setItem("pokemonId", JSON.stringify(pokemonId));
    } catch (error) {
      console.log(error);
    }
  }

  function increaseId() {
    if (pokemonId < 151) {
      setPokemonId(pokemonId + 1);
    } else {
      setPokemonId(1);
    }
  }

  function decreaseId() {
    if (pokemonId > 1) {
      setPokemonId(pokemonId - 1);
    } else {
      setPokemonId(151);
    }
  }

  const location = useLocation();
  return (
    <div className="pokedex-view">
      <h1>This is the Pokedex View!</h1>
      <p>{location.state}</p>
      <div className="pokedex-container">
        <button className="btn" onClick={decreaseId}>
          <ArrowBackIosNewIcon fontSize="large" />
        </button>
        <Card
          name={pokemon.name}
          id={pokemon.id}
          img={pokemon.img}
          description={pokemon.description}
        />
        <button className="btn" onClick={increaseId}>
          <ArrowForwardIosIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
}

export default PokedexView;
