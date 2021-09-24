function getColors(type) {
  let colors = {
    background: "",
    color: "",
  };
  switch (type) {
    case "bug":
      colors.background = "var(--clr-type-bug)";
      colors.color = "white";
      break;
    case "dragon":
      colors.background = "var(--clr-type-dragon)";
      colors.color = "white";
      break;
    case "fairy":
      colors.background = "var(--clr-type-fairy)";
      colors.color = "black";
      break;
    case "fire":
      colors.background = "var(--clr-type-fire)";
      colors.color = "white";
      break;
    case "ghost":
      colors.background = "var(--clr-type-ghost)";
      colors.color = "white";
      break;
    case "ground":
      colors.background = "var(--clr-type-ground)";
      colors.color = "var(--clr-black)";
      break;
    case "normal":
      colors.background = "var(--clr-type-normal";
      colors.color = "var(--clr-black)";
      break;
    case "psychic":
      colors.background = "var(--clr-type-psychic)";
      colors.color = "white";
      break;
    case "steel":
      colors.background = "var(--clr-type-steel)";
      colors.color = "var(--clr-black)";
      break;
    case "dark":
      colors.background = "var(--clr-type-dark)";
      colors.color = "white";
      break;
    case "electric":
      colors.background = "var(--clr-type-electric)";
      colors.color = "var(--clr-black)";
      break;
    case "fighting":
      colors.background = "var(--clr-type-fighting)";
      colors.color = "white";
      break;
    case "flying":
      colors.background = "var(--clr-type-flying)";
      colors.color = "var(--clr-black)";
      break;
    case "grass":
      colors.background = "var(--clr-type-grass)";
      colors.color = "var(--clr-black)";
      break;
    case "ice":
      colors.background = "var(--clr-type-ice)";
      colors.color = "var(--clr-black)";
      break;
    case "poison":
      colors.background = "var(--clr-type-poison)";
      colors.color = "white";
      break;
    case "rock":
      colors.background = "var(--clr-type-rock)";
      colors.color = "white";
      break;
    case "water":
      colors.background = "var(--clr-type-water)";
      colors.color = "white";
      break;
    default:
      break;
  }

  return colors;
}

export default getColors;
