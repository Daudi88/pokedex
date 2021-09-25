import React, { useState } from "react";
import "./SearchContainer.css";

const SearchContainer = (props) => {
  return (
    <div className="search-container">
      <form
        className="input-container"
        onSubmit={(event) => props.searchForPokemons(event)}
      >
        <h2>Name or Number</h2>
        <input
          value={props.search}
          onChange={(event) => props.setSearch(event.target.value)}
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
  );
};

export default SearchContainer;
