import React from "react";
import "./Info.css";

function Info(props) {
  function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  return (
    <div className="info">
      <h4>{props.name}</h4>

      {props.value ? (
        <p>
          {props.value} {props.unit ? props.unit : null}
        </p>
      ) : null}

      {props.values
        ? props.values.map((value) => <p>{capitalize(value.ability.name)}</p>)
        : null}
    </div>
  );
}

export default Info;
