import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Details from "../../components/details/Details";
import capitalize from "../../shared/functions/capitalize";
import "./PokedexView.css";
import Loader from "../../components/loader/Loader";
import { style } from "@mui/system";

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
    name: "",
    id: "",
    img: "",
    description: "",
    stats: [],
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
        stats: result.data.stats,
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
      hideLoader();
    } catch (error) {
      console.log(error);
    }
  }

  function hideLoader() {
    document.getElementById("loader").style.display = "none";
  }

  function getName(name) {
    if (name === "nidoran-f") {
      name = name.replace("-f", "♀");
    } else if (name === "nidoran-m") {
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
    <div className="view-container">
      <div className="sub-container">
        <h1>Welcome to the Pokedex!</h1>
        <p>{location.state}</p>
      </div>
      <div className="arrows-container">
        <button className="btn-arrow btn-arrow-left" onClick={decreaseId}>
          <ArrowBackIosNewIcon className="arrow-circle" fontSize="large" />
        </button>
        <button className=" btn-arrow btn-arrow-right" onClick={increaseId}>
          <ArrowForwardIosIcon className="arrow-circle" fontSize="large" />
        </button>
      </div>
      <Loader />
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
