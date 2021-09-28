import $ from "jquery";

const scrollToPokemons = () => {
  const top = $("#pokemon-cards").offset().top;
  window.scrollTo({ top: top, left: 0 });
};

export default scrollToPokemons;
