import http from "../PokemonAPI";

const PokemonAPIService = {};

PokemonAPIService.getPokemon = (identifier) => {
  return http.get(`pokemon/${identifier}`);
};

PokemonAPIService.getAllPokemons = (totalAmountOfPokemonsToGet) => {
  return http.get(`pokemon?limit=${totalAmountOfPokemonsToGet}`);
};

PokemonAPIService.getPokemonDescription = (id) => {
  return http.get(`pokemon-species/${id}`);
};

PokemonAPIService.getWeaknesses = (type) => {
  return http.get(`type/${type}`);
};

PokemonAPIService.getTypes = () => {
  return http.get("type/");
};

export default PokemonAPIService;
