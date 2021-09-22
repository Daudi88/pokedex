import http from "../PokemonAPI";

const getPokemon = (identifier) => {
  return http.get(`pokemon/${identifier}`);
};

const getPokemons = (offset) => {
  return http.get(`pokemon?limit=12&offset=${offset}`);
};

const getPokemonDescription = (id) => {
  return http.get(`pokemon-species/${id}`);
};

const getWeaknesses = (type) => {
  return http.get(`type/${type}`);
};

export default {
  getPokemon,
  getPokemons,
  getPokemonDescription,
  getWeaknesses,
};
