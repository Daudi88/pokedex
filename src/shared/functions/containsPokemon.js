const containsPokemon = (list, pokemon) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === pokemon) {
      return true;
    }
  }

  return false;
};

export default containsPokemon;
