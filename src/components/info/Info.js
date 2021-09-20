import React from "react";
import capitalize from "../../shared/functions/capitalize";
import "./Info.css";

function Info(props) {
  return (
    <div className="info">
      <h4>{props.name}</h4>

      {props.value ? (
        <p>
          {props.value} {props.unit ? props.unit : null}
        </p>
      ) : null}

      {props.values
        ? props.values.map((value, index) => (
            <p key={index}>{capitalize(value.ability.name)}</p>
          ))
        : null}
    </div>
  );
}

export default Info;
