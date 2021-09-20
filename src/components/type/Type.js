import React from "react";
import getColor from "../../shared/functions/getColor";
import capitalize from "../../shared/functions/capitalize";
import "./Type.css";

function Type(props) {
  return (
    <div className="type">
      <h2>Type</h2>
      {props.types.map((value, index) => {
        return (
          <button
            key={index}
            className="btn btn-type"
            style={{ background: getColor(value.type.name) }}
          >
            {capitalize(value.type.name)}
          </button>
        );
      })}
    </div>
  );
}

export default Type;
