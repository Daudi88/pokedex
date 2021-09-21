import capitalize from "./capitalize";

const checkName = (name) => {
  if (name === "nidoran-f") {
    name = name.replace("-f", "♀");
  } else if (name === "nidoran-m") {
    name = name.replace("-m", "♂");
  }

  return capitalize(name);
};

export default checkName;
