import React from "react";
import { useHistory } from "react-router";
import RoutingPath from "../../routes/RoutingPath";
import capitalize from "../../shared/functions/capitalize";
import getColors from "../../shared/functions/getColors";
import "./TypeButton.css";

export const TypeButton = (props) => {
  const history = useHistory();

  const handleClick = () => {
    if (props.isClickable) {
      history.push(RoutingPath.pokedexView, props.type);
    }
  };
  return (
    <button
      className={`btn-type ${props.className}`}
      style={getColors(props.type)}
      onClick={handleClick}
    >
      {capitalize(props.type)}
    </button>
  );
};
