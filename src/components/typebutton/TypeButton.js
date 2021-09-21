import React from "react";
import getColors from "../../shared/functions/getColors";
import capitalize from "../../shared/functions/capitalize";
import "./TypeButton.css";

export const TypeButton = (props) => {
  return (
    <button
      className={`btn btn-type ${props.className}`}
      style={getColors(props.type)}
    >
      {capitalize(props.type)}
    </button>
  );
};
