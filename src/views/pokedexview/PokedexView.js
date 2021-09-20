import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Details from "../../components/details/Details";
import capitalize from "../../shared/functions/capitalize";
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

  const [pokemon, setPokemon] = useState({
    name: "", // name
    id: "", // id
    img: "", // sprites.other.official-artwork.front_default
    description: "", // flavor_text_entries[0].flavor_text
    stats: {
      hp: "",
      attack: "",
      defense: "",
      specialAttack: "",
      specialDefense: "",
      speed: "",
    },
    info: {
      height: "",
      weight: "",
      gender: "",
      abilities: [],
    },
    types: [],
  });

  useEffect(() => {
    getPokemon();
    return () => {};
  }, [pokemonId]);

  async function getPokemon() {
    try {
      const API_URL = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
      const result = await axios.get(API_URL);
      setPokemon({
        name: getName(result.data.name),
        id: getId(result.data.id),
        img: result.data.sprites.other["official-artwork"].front_default,
        stats: {
          hp: result.data.stats[0].base_stat,
          attack: result.data.stats[1].base_stat,
          defense: result.data.stats[2].base_stat,
          specialAttack: result.data.stats[3].base_stat,
          specialDefense: result.data.stats[4].base_stat,
          speed: result.data.stats[5].base_stat,
        },
        info: {
          height: result.data.height,
          weight: result.data.weight,
          abilities: result.data.abilities,
        },
        types: result.data.types,
      });

      const API_DESC_URL = `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`;
      const descResult = await axios.get(API_DESC_URL);
      setPokemon((prevValues) => {
        return {
          ...prevValues,
          description: getDescription(descResult.data.flavor_text_entries),
        };
      });

      sessionStorage.setItem("pokemonId", JSON.stringify(pokemonId));
    } catch (error) {
      console.log(error);
    }
  }

  function getName(name) {
    if (name.includes("-f")) {
      console.log("female ♀");
      name = name.replace("-f", "♀");
    } else if (name.includes("-m")) {
      console.log("male ♂");
      name = name.replace("-m", "♂");
    }

    return capitalize(name);
  }

  function getId(num) {
    return num < 10 ? "#00" + num : num < 100 ? "#0" + num : "#" + num;
  }

  function getDescription(entries) {
    const language = "en";
    const version = "red";
    const entry = entries.filter(
      (entry) =>
        entry.language.name === language && entry.version.name === version
    );

    return entry[0].flavor_text.replace("\u000c", " ");
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
    <div className="view-wrapper">
      {/* <h1>This is the Pokedex View!</h1>
      <p>{location.state}</p> */}
      <div className="arrows-container">
        <button className="btn-arrow btn-arrow-left" onClick={decreaseId}>
          <ArrowBackIosNewIcon className="arrow-circle" fontSize="large" />
        </button>
        <button className=" btn-arrow btn-arrow-right" onClick={increaseId}>
          <ArrowForwardIosIcon className="arrow-circle" fontSize="large" />
        </button>
      </div>
      <Details
        name={pokemon.name}
        id={pokemon.id}
        img={pokemon.img}
        description={pokemon.description}
        stats={pokemon.stats}
        info={pokemon.info}
        types={pokemon.types}
        weaknesses={pokemon.weaknesses}
      />
    </div>
  );
}

export default PokedexView;
