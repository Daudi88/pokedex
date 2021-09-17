import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import "./PokedexView.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import StarIcon from '@mui/icons-material/Star';

function getSessionStorageOrDefault() {
  const stored = sessionStorage.getItem("pokemonId");
  if (stored) {
    return JSON.parse(stored);
  } else {
    return 1;
  }
}


function PokedexView() {
  const [id, setId] = useState(getSessionStorageOrDefault());
  const API_URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const API_DESC_URL = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
  const [pokemon, setPokemon] = useState({
    name: "", // name
    img: "", // sprites.other.official-artwork.front_default
    description: "", // flavor_text_entries[0].flavor_text
  });

  useEffect(() => {
    getPokemon();
    return () => {}
  }, [id])

  


  async function getPokemon() {   
    try {
      const res = await axios.get(API_URL);
      setPokemon({
        name: res.data.name,
        img: res.data.sprites.other["official-artwork"].front_default,
      });

      
      const descRes = await axios.get(API_DESC_URL);
      const englishEntry = 1;
      setPokemon((prevValues) => {
        return {
          ...prevValues,
          description: descRes.data.flavor_text_entries[englishEntry].flavor_text.replace("\u000c", " "),
        };
      });

      sessionStorage.setItem("pokemonId", JSON.stringify(id))
    } catch (error) {
      console.log(error);
    }
  }

  const location = useLocation();
  return (
    <div>
      <h1>This is the Pokedex View!</h1>
      <p>{location.state}</p>
      <div className="card">
        <h2>{pokemon.name}</h2>
        <img src={pokemon.img} alt="" />
        <p>{pokemon.description}</p>
      </div>
      <div>
      <button className="btn" onClick={() => setId(id - 1)}>
        <ArrowBackIosNewIcon fontSize="large"/>
      </button>
      <button className="btn">
        <StarIcon className="star" fontSize="large"/>
      </button>
      <button className="btn" onClick={() => setId(id + 1)}>
        <ArrowForwardIosIcon fontSize="large"/>
        </button>
      </div>
    </div>
  );
}

export default PokedexView;
