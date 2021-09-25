import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Details from "../../components/details/Details";
import Loader from "../../components/loader/Loader";
import { PokemonContext } from "../../shared/Provider/PokemonProvider";
import PokemonAPIService from "../../shared/api/service/PokemonAPIService";
import increaseId from "../../shared/functions/increaseId";
import decreaseId from "../../shared/functions/decreaseId";
import calculateWeaknesses from "../../shared/functions/calculateWeaknesses";
import formatId from "../../shared/functions/formatId";
import "./DetailsView.css";

const DetailsView = () => {
  const location = useLocation();
  const [allPokemons] = useContext(PokemonContext);
  const [pokemonId, setPokemonId] = useState(
    location.state ? location.state : 1
  );
  const [counter, setCounter] = useState(0);
  const [description, setDescription] = useState();
  const [damageRelations, setDamageRelations] = useState([]);
  const [pokemon, setPokemon] = useState(
    allPokemons.filter((pokemon) => pokemon.id === pokemonId)[0]
  );

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (!pokemon) {
      setPokemon(allPokemons.filter((pokemon) => pokemon.id === pokemonId)[0]);
      setCounter(0);
      setDamageRelations([]);
    }
  }, [pokemonId, allPokemons]);

  useEffect(() => {
    fetchDescription();
    fetchFirstDamageRelation();
  }, [pokemon]);

  useEffect(() => {
    if (counter < pokemon?.types.length) {
      fetchDamageRelations(pokemon?.types[counter].type.name);
    }
  }, [counter]);

  const fetchDescription = async () => {
    try {
      const { data } = await PokemonAPIService.getPokemonDescription(pokemonId);
      setDescription(getDescriptionEntry(data.flavor_text_entries));
    } catch (error) {
      console.log(error);
    }
  };

  const getDescriptionEntry = (entries) => {
    const language = "en";
    const entry = entries.filter((entry) => entry.language.name === language);
    return entry[0].flavor_text.replace("\f", " ");
  };

  const fetchFirstDamageRelation = () => {
    if (pokemon) {
      fetchDamageRelations(pokemon?.types[counter].type.name);
    }
  };

  const fetchDamageRelations = async (type) => {
    try {
      const { data } = await PokemonAPIService.getWeaknesses(type);
      setDamageRelations([...damageRelations, data.damage_relations]);
      setCounter(counter + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const changePokemon = (change) => {
    setPokemon();
    setPokemonId(change);
  };

  const showDetails = () => {
    if (!pokemon) {
      return <Loader />;
    }
    return (
      <Details
        id={pokemon.id}
        img={pokemon.img}
        description={description}
        stats={pokemon.stats}
        info={pokemon.info}
        types={pokemon.types}
        weaknesses={calculateWeaknesses(damageRelations)}
      />
    );
  };

  const getPrevPokemon = () => {
    const prevId = decreaseId(pokemonId, 1);
    const prevPokemon = allPokemons.filter(
      (pokemon) => pokemon.id === prevId
    )[0];

    return (
      <h3 className="prev-pokemon">
        <span className="next-pokemon-id">{formatId(prevPokemon?.id)}</span>{" "}
        {prevPokemon?.name}
      </h3>
    );
  };

  const getNextPokemon = () => {
    const nextId = increaseId(pokemonId, 1);
    const nextPokemon = allPokemons.filter(
      (pokemon) => pokemon.id === nextId
    )[0];

    return (
      <h3 className="next-pokemon">
        {nextPokemon?.name}{" "}
        <span className="next-pokemon-id">{formatId(nextPokemon?.id)}</span>
      </h3>
    );
  };

  return (
    <div className="view-container">
      <div className="arrows-container">
        <button
          className="btn-arrow btn-arrow-left"
          onClick={() => changePokemon(decreaseId(pokemonId, 1))}
        >
          <KeyboardArrowLeftIcon className="arrow-left" fontSize="small" />
          {getPrevPokemon()}
        </button>
        <button
          className=" btn-arrow btn-arrow-right"
          onClick={() => changePokemon(increaseId(pokemonId, 1))}
        >
          <KeyboardArrowRightIcon className="arrow-right" fontSize="small" />
          {getNextPokemon()}
        </button>
        <div className="details-title">
          <div className="details-title-inner">
            {pokemon?.name}{" "}
            <span className="details-id">{formatId(pokemon?.id)}</span>
          </div>
        </div>
      </div>
      <div className="body-container">{showDetails()}</div>
    </div>
  );
};

export default DetailsView;
