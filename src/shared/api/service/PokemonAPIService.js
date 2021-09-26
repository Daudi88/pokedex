import http from "../PokemonAPI";

const getPokemon = (identifier) => {
  return http.get(`pokemon/${identifier}`);
};

const getAllPokemons = () => {
  return http.get("pokemon?limit=898");
};

const getPokemonDescription = (id) => {
  return http.get(`pokemon-species/${id}`);
};

const getWeaknesses = (type) => {
  return http.get(`type/${type}`);
};

export default {
  getPokemon,
  getAllPokemons,
  getPokemonDescription,
  getWeaknesses,
};
