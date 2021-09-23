import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Details from "../../components/details/Details";
import Loader from "../../components/loader/Loader";
import { PokemonContext } from "../../shared/Provider/PokemonProvider";
import PokemonAPIService from "../../shared/api/service/PokemonAPIService";
import checkName from "../../shared/functions/checkName";
import increaseId from "../../shared/functions/increaseId";
import decreaseId from "../../shared/functions/decreaseId";
import calculateWeaknesses from "../../shared/functions/calculateWeaknesses";
import formatId from "../../shared/functions/formatId";
import "./DetailsView.css";

const DetailsView = () => {
  const location = useLocation();
  const [pokemons] = useContext(PokemonContext);
  const [pokemonId, setPokemonId] = useState(
    location.state ? location.state : 1
  );
  const [counter, setCounter] = useState(0);
  const [description, setDescription] = useState();
  const [damageRelations, setDamageRelations] = useState([]);
  const [pokemon, setPokemon] = useState(
    pokemons.filter((pokemon) => pokemon.id === pokemonId)[0]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setPokemon(pokemons.filter((pokemon) => pokemon.id === pokemonId)[0]);
    setCounter(0);
    setDamageRelations([]);
  }, [pokemonId]);

  useEffect(() => {
    if (!pokemon) {
      fetchPokemon();
    }
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

  const fetchPokemon = async () => {
    try {
      const { data } = await PokemonAPIService.getPokemon(pokemonId);
      setPokemon({
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
      });
    } catch (error) {
      console.log(error);
    }
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

  return (
    <div className="view-container">
      <div className="arrows-container">
        <button
          className="btn-arrow btn-arrow-left"
          onClick={() => setPokemonId(decreaseId(pokemonId, 1))}
        >
          <KeyboardArrowLeftIcon className="arrow-left" fontSize="small" />
        </button>
        <button
          className=" btn-arrow btn-arrow-right"
          onClick={() => setPokemonId(increaseId(pokemonId, 1))}
        >
          <KeyboardArrowRightIcon className="arrow-right" fontSize="small" />
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
