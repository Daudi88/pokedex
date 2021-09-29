import capitalize from "./capitalize";

const getAbilities = (pokemons) => {
  const abilities = [];
  const abilityObjects = [];

  pokemons.forEach((pokemon) => {
    abilityObjects.push(...pokemon.info.abilities);
  });

  abilityObjects.forEach((object) => {
    if (!abilities.includes(capitalize(object.ability.name))) {
      abilities.push(capitalize(object.ability.name));
    }
  });

  abilities.sort();
  abilities.unshift("All");

  return abilities;
};

export default getAbilities;
