import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../shared/Provider/PokemonProvider";
import Card from "../../components/card/Card";
import Loader from "../../components/loader/Loader";
import "./PokedexView.css";
import { useLocation } from "react-router";

const PokedexView = () => {
  const location = useLocation();
  const [allPokemons] = useContext(PokemonContext);
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(12);
  const [search, setSearch] = useState(
    location.state ? location.state : undefined
  );
  const [foundPokemons, setFoundPokemons] = useState([]);
  const [noPokemonsFound, setNoPokemonsFound] = useState(false);

  useEffect(() => {
    setNoPokemonsFound(false);
    setOffset(12);
    setPokemons([]);
    if (search?.length > 0 && allPokemons.length > 0) {
      findPokemons();
    }
  }, []);

  useEffect(() => {
    if (pokemons.length < 1 && allPokemons.length >= 12) {
      getfirstTwelvePokemons();
    }
  }, [allPokemons]);

  useEffect(() => {
    setPokemons([]);
    getfirstTwelvePokemons();
  }, [foundPokemons]);

  const getfirstTwelvePokemons = () => {
    if (foundPokemons.length > 0) {
      setPokemons(foundPokemons.slice(0, 12));
    } else {
      setPokemons(allPokemons.slice(0, 12));
    }
  };

  const getTwelvePokemons = () => {
    if (foundPokemons.length > 0) {
      setPokemons([...pokemons, ...foundPokemons.slice(offset, offset + 12)]);
    } else {
      setPokemons([...pokemons, ...allPokemons.slice(offset, offset + 12)]);
    }

    setOffset(offset + 12);
  };

  const searchForPokemons = (event) => {
    setFoundPokemons([]);
    window.scrollTo({ top: 450, left: 0, behavior: "smooth" });
    findPokemons();
    event.preventDefault();
  };

  const findPokemons = () => {
    if (search?.length > 0) {
      const matchingPokemons = allPokemons.filter(
        (pokemon) =>
          pokemon.name.toLowerCase().includes(search.toLowerCase()) ||
          String(pokemon.id).includes(search)
      );

      for (var i = 0; i < allPokemons.length; i++) {
        for (var j = 0; j < allPokemons[i].types.length; j++) {
          if (
            allPokemons[i].types[j].type.name === search.toLowerCase() &&
            !containsPokemon(matchingPokemons, allPokemons[i])
          ) {
            matchingPokemons.push(allPokemons[i]);
          }
        }
      }

      if (matchingPokemons.length > 0) {
        setNoPokemonsFound(false);
        setFoundPokemons(matchingPokemons);
        setSearch();
      } else {
        setNoPokemonsFound(true);
        setFoundPokemons([]);
      }
    } else {
      setNoPokemonsFound(false);
      setFoundPokemons([]);
    }
  };

  const containsPokemon = (list, pokemon) => {
    for (var i = 0; i < list.length; i++) {
      if (list[i] === pokemon) {
        return true;
      }
    }

    return false;
  };

  const displayData = () => {
    if (pokemons.length < 1) {
      return <Loader />;
    } else if (noPokemonsFound) {
      return (
        <div className="error-container">
          <h3>No Pokémon Matched Your Search!</h3>
          <h4>Try these suggestions to fins a Pokémon:</h4>
          <ul>
            <li className="error-tip">
              Reduce the number of search parameters
            </li>
            <li className="error-tip">Search only for one Pokémon at a time</li>
            <li className="error-tip">Search for parts of the name</li>
          </ul>
        </div>
      );
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
        <h1>Pokédex!</h1>
      </div>
      <div className="search-container">
        <form
          className="input-container"
          onSubmit={(event) => searchForPokemons(event)}
        >
          <h2>Name or Number</h2>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <button>
            <i className="fas fa-search fa-lg"></i>
          </button>
        </form>
        <div className="search-info">
          <p>
            Search for a Pokémon by name or using its National Pokédex number.
          </p>
        </div>
      </div>
      <div className="divider"></div>
      <div className="body-container">{displayData()}</div>
      <div className="btn-container">
        <button
          style={{
            display:
              (allPokemons.length <= pokemons.length ||
                foundPokemons.length <= pokemons.length) &&
              "none",
          }}
          className="btn btn-load-more"
          onClick={() => getTwelvePokemons()}
        >
          Load more Pokémon
        </button>
      </div>
    </div>
  );
};

export default PokedexView;
