import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Details from "../../components/details/Details";
import Loader from "../../components/loader/Loader";
import { PokemonContext } from "../../shared/Provider/PokemonProvider";
import PokemonAPIService from "../../shared/api/service/PokemonAPIService";
import checkName from "../../shared/functions/checkName";
import increaseId from "../../shared/functions/increaseId";
import decreaseId from "../../shared/functions/decreaseId";
import "./DetailsView.css";

const DetailsView = () => {
  const location = useLocation();
  const [pokemons] = useContext(PokemonContext);
  const [pokemonId, setPokemonId] = useState(location.state);
  const [isLoading, setIsLoading] = useState();
  const [description, setDescription] = useState();
  const [pokemon, setPokemon] = useState(
    pokemons.filter((pokemon) => pokemon.id === pokemonId)[0]
  );

  useEffect(() => {
    setPokemon(pokemons.filter((pokemon) => pokemon.id === pokemonId)[0]);
  }, [pokemonId]);

  useEffect(() => {
    if (!pokemon) {
      fetchPokemon();
    }
    fetchDescription();
  }, [pokemon]);

  const fetchDescription = async () => {
    try {
      setIsLoading(true);
      const { data } = await PokemonAPIService.getPokemonDescription(pokemonId);
      setDescription(getDescriptionEntry(data.flavor_text_entries));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getDescriptionEntry = (entries) => {
    const language = "en";
    const entry = entries.filter((entry) => entry.language.name === language);
    console.log(entry[0].flavor_text);
    return entry[0].flavor_text.replace("\f", "");
  };

  const fetchPokemon = async () => {
    try {
      setIsLoading(true);
      console.log(pokemonId);
      const { data } = await PokemonAPIService.getPokemon(pokemonId);
      console.log(data);
      setPokemon({
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
      });

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const showDetails = () => {
    if (isLoading) {
      return <Loader />;
    } else if (pokemon) {
      return (
        <Details
          name={pokemon.name}
          id={pokemon.id}
          img={pokemon.img}
          description={description}
          stats={pokemon.stats}
          info={pokemon.info}
          types={pokemon.types}
          weaknesses={pokemon.weaknesses}
        />
      );
    }
  };

  return (
    <div className="view-container">
      <div className="arrows-container">
        <button
          className="btn-arrow btn-arrow-left"
          onClick={() => setPokemonId(decreaseId(pokemonId, 1))}
        >
          <ArrowBackIosNewIcon className="arrow-circle" fontSize="large" />
        </button>
        <button
          className=" btn-arrow btn-arrow-right"
          onClick={() => setPokemonId(increaseId(pokemonId, 1))}
        >
          <ArrowForwardIosIcon className="arrow-circle" fontSize="large" />
        </button>
      </div>
      {showDetails()}
    </div>
  );
};

export default DetailsView;
