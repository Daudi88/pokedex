import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { PokemonContext } from "../../shared/provider/PokemonProvider";
import Loader from "../../components/loader/Loader";
import Card from "../../components/card/Card";
import SearchContainer from "../../components/searchcontainer/SearchContainer";
import AdvancedSearch from "../../components/advancedsearch/AdvancedSearch";
import ErrorContainer from "../../components/errorcontainer/ErrorContainer";
import DropDownMenu from "../../components/dropdownmenu/DropDownMenu";
import byLowestNumberFirst from "../../shared/functions/sort/byLowestNumberFirst";
import byHighestNumberFirst from "../../shared/functions/sort/byHighestNumberFirst";
import byName from "../../shared/functions/sort/byName";
import byNameReversed from "../../shared/functions/sort/byNameReversed";
import scrollToPokemons from "../../shared/functions/scrollToPokemons";
import "./PokedexView.css";

const PokedexView = ({ totalAmountOfPokemonsToGet }) => {
  const location = useLocation();
  const defaultSortTitle = "Lowest Number (First)";
  const noSortTitle = "Sort results by...";
  const pokemonsToShow = 12;
  const sortOptions = [
    "Sort results by...",
    "Lowest Number (First)",
    "Highest Number (First)",
    "A-Z",
    "Z-A",
  ];

  const [allPokemons] = useContext(PokemonContext);
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(pokemonsToShow);
  const [search, setSearch] = useState("");
  const [foundPokemons, setFoundPokemons] = useState([]);
  const [noPokemonsFound, setNoPokemonsFound] = useState(false);
  const [open, setOpen] = useState(false);
  const [sortTitle, setSortTitle] = useState();
  const [isFetchDone, setIsFetchDone] = useState();
  const [advancedSearch, setAdvancedSearch] = useState({
    search: false,
    numberRange: { lowestNumber: 1, highestNumber: 898 },
    types: location.state?.isType ? [location.state.name] : [],
    weaknesses: location.state?.isType ? [] : [location.state?.name],
  });

  useEffect(() => {
    if (search.length > 0 && allPokemons.length > 0) {
      findPokemons();
    }
  }, []);

  useEffect(() => {
    if (pokemons.length < 1 && allPokemons.length >= 12) {
      setSortTitle(defaultSortTitle);
    }

    if (allPokemons.length === totalAmountOfPokemonsToGet) {
      setIsFetchDone(true);
    }
  }, [allPokemons]);

  useEffect(() => {
    if (sortTitle !== noSortTitle) {
      if (foundPokemons.length < 1) {
        setPokemons([]);
      }

      if (
        isFetchDone ||
        (sortTitle === defaultSortTitle && allPokemons.length >= pokemonsToShow)
      ) {
        sortPokemonsBySortTitle();
        getFirstTwelvePokemons();
      }
    }
  }, [sortTitle, isFetchDone, foundPokemons]);

  useEffect(() => {
    if (advancedSearch?.search) {
      setFoundPokemons([]);
      scrollToPokemons();
      findPokemons();
      setSortTitle(defaultSortTitle);
      setAdvancedSearch((prevValues) => ({ ...prevValues, search: false }));
    }
  }, [advancedSearch]);

  const sortPokemonsBySortTitle = () => {
    if (sortTitle === "Highest Number (First)") {
      if (foundPokemons.length > 0) {
        foundPokemons.sort(byHighestNumberFirst);
      } else {
        allPokemons.sort(byHighestNumberFirst);
      }
    } else if (sortTitle === "A-Z") {
      if (foundPokemons.length > 0) {
        foundPokemons.sort(byName);
      } else {
        allPokemons.sort(byName);
      }
    } else if (sortTitle === "Z-A") {
      if (foundPokemons.length > 0) {
        foundPokemons.sort(byNameReversed);
      } else {
        allPokemons.sort(byNameReversed);
      }
    } else {
      if (foundPokemons.length > 0) {
        foundPokemons.sort(byLowestNumberFirst);
      } else {
        allPokemons.sort(byLowestNumberFirst);
      }
    }
  };

  const getFirstTwelvePokemons = () => {
    if (foundPokemons.length > 0) {
      setPokemons(foundPokemons.slice(0, pokemonsToShow));
    } else {
      setPokemons(allPokemons.slice(0, pokemonsToShow));
    }
  };

  const getTwelvePokemons = () => {
    if (foundPokemons.length > 0) {
      setPokemons([
        ...pokemons,
        ...foundPokemons.slice(offset, offset + pokemonsToShow),
      ]);
    } else {
      setPokemons([
        ...pokemons,
        ...allPokemons.slice(offset, offset + pokemonsToShow),
      ]);
    }

    setOffset(offset + pokemonsToShow);
  };

  const searchForPokemons = (event) => {
    setFoundPokemons([]);
    scrollToPokemons();
    findPokemons();
    setSortTitle(defaultSortTitle);
    event.preventDefault();
  };

  const findPokemons = () => {
    if (search?.length > 0) {
      const matchingPokemons = allPokemons.filter(
        (pokemon) =>
          pokemon.name.toLowerCase().includes(search.toLowerCase()) ||
          String(pokemon.id).includes(search)
      );

      if (matchingPokemons.length > 0) {
        setNoPokemonsFound(false);
        setFoundPokemons(matchingPokemons);
        setSearch();
      } else {
        setNoPokemonsFound(true);
        setFoundPokemons([]);
      }
    } else if (advancedSearch) {
      const pokemonsInRange = allPokemons.slice(
        advancedSearch.numberRange.lowestNumber - 1,
        advancedSearch.numberRange.highestNumber
      );

      const pokemonOfTypes = [];
      const matchingPokemons = [];

      if (advancedSearch.types.length > 0) {
        let counter = 0;

        pokemonsInRange.map((pokemon) => {
          pokemon.types.forEach((type) => {
            if (advancedSearch.types.includes(type.type.name)) {
              counter++;
            }
          });

          if (
            counter === advancedSearch.types.length &&
            !pokemonOfTypes.includes(pokemon)
          ) {
            pokemonOfTypes.push(pokemon);
          }

          counter = 0;
        });
      } else {
        pokemonOfTypes.push(...pokemonsInRange);
      }

      if (advancedSearch.ability !== "All") {
        pokemonOfTypes.map((pokemon) => {
          pokemon.info.abilities.forEach((ability) => {
            if (ability.ability.name === advancedSearch.ability.toLowerCase()) {
              matchingPokemons.push(pokemon);
            }
          });
        });
      } else {
        matchingPokemons.push(...pokemonOfTypes);
      }

      if (matchingPokemons.length > 0) {
        setNoPokemonsFound(false);
        setFoundPokemons(matchingPokemons);
        setAdvancedSearch();
      } else {
        setNoPokemonsFound(true);
        setFoundPokemons([]);
      }
    } else {
      setNoPokemonsFound(false);
      setFoundPokemons([]);
    }
  };

  const shufflePokemons = () => {
    setSortTitle("Sort results by...");
    setSearch("");
    setFoundPokemons([]);
    setNoPokemonsFound(false);
    let i = allPokemons.length;

    while (--i) {
      let j = Math.floor(Math.random() * (i + 1));
      const tempi = allPokemons[i];
      const tempj = allPokemons[j];
      allPokemons[i] = tempj;
      allPokemons[j] = tempi;
    }
    getFirstTwelvePokemons();
    scrollToPokemons();
  };

  const displayData = () => {
    if (pokemons.length < 1) {
      return (
        <div className="pokedex-loader">
          <Loader />
        </div>
      );
    } else if (noPokemonsFound) {
      return <ErrorContainer />;
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
    <main>
      <header>
        <h1 className="heading-title">Pokédex</h1>
        <SearchContainer
          search={search}
          setSearch={setSearch}
          searchForPokemons={searchForPokemons}
        />
        <AdvancedSearch
          advancedSearch={advancedSearch}
          setAdvancedSearch={setAdvancedSearch}
        />
      </header>
      <section>
        <div className="btn-container top-btns-container">
          <button className="btn btn-surprise" onClick={shufflePokemons}>
            <i className="fas fa-sync-alt"></i> Surprise Me!
          </button>
          <div className="sort-container">
            <button
              className="btn btn-drop-down-header"
              onClick={() => setOpen(!open)}
            >
              <span>{sortTitle}</span>
              <i className={`fas fa-chevron-${open ? "up" : "down"} fa-lg`}></i>
            </button>
            <DropDownMenu
              open={open}
              setOpen={setOpen}
              setDropDownTitle={setSortTitle}
              options={sortOptions}
              className="sort"
            />
          </div>
        </div>
        <div id="pokemon-cards">{displayData()}</div>
        <div className="btn-container btn-load-more-container">
          <button
            style={{
              display:
                (foundPokemons.length > 0 &&
                  foundPokemons.length <= pokemons.length) ||
                noPokemonsFound ||
                allPokemons.length <= pokemons.length
                  ? "none"
                  : "",
            }}
            className="btn btn-load-more"
            onClick={() => getTwelvePokemons()}
          >
            Load more Pokémon
          </button>
        </div>
      </section>
    </main>
  );
};

export default PokedexView;
