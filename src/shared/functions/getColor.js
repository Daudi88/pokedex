function getColor(type) {
  let color = "";
  switch (type) {
    case "bug":
      color = "var(--clr-type-bug)";
      break;
    case "dragon":
      color = "var(--clr-type-dragon)";
      break;
    case "fairy":
      color = "var(--clr-type-fairy)";
      break;
    case "fire":
      color = "var(--clr-type-fire)";
      break;
    case "ghost":
      color = "var(--clr-type-ghost)";
      break;
    case "ground":
      color = "var(--clr-type-ground)";
      break;
    case "normal":
      color = "var(--clr-type-normal";
      break;
    case "psychic":
      color = "var(--clr-type-psychic)";
      break;
    case "steel":
      color = "var(--clr-type-steel)";
      break;
    case "electric":
      color = "var(--clr-type-electric)";
      break;
    case "fighting":
      color = "var(--clr-type-fighting)";
      break;
    case "flying":
      color = "var(--clr-type-flying)";
      break;
    case "grass":
      color = "var(--clr-type-grass)";
      break;
    case "ice":
      color = "var(--clr-type-ice)";
      break;
    case "poison":
      color = "var(--clr-type-poison)";
      break;
    case "rock":
      color = "var(--clr-type-rock)";
      break;
    case "water":
      color = "var(--clr-type-water)";
      break;
    default:
      break;
  }

  return color;
}

export default getColor;
