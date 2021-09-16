import React, { useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import "./PokedexView.css";

function PokedexView() {
  const [id, setId] = useState(1);
  const API_URL = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  const API_DESC_URL = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;
  const [pokemon, setPokemon] = useState({
    name: "", // name
    img: "", // sprites.front_default (sprites.other.official-artwork.front_default)
    description: "", // flavor_text_entries[0]
  });

  async function getPokemon() {
    try {
      const res = await axios.get(API_URL);
      setPokemon({
        name: res.data.name,
        img: res.data.sprites.other["official-artwork"].front_default,
      });

      const descRes = await axios.get(API_DESC_URL);
      setPokemon((prevValues) => {
        return {
          ...prevValues,
          description: descRes.data.flavor_text_entries[0].flavor_text.replace(
            "\u000c",
            " "
          ),
        };
      });

      setId(id + 1);
    } catch (error) {
      console.log(error);
    }
  }

  const location = useLocation();
  return (
    <div>
      <h1>This is the Pokedex View!</h1>
      <p>{location.state}</p>
      <div>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.img} alt="" />
        <p>{pokemon.description}</p>
      </div>
      <button onClick={getPokemon}>Get PoKéMoN</button>
    </div>
  );
}

export default PokedexView;
