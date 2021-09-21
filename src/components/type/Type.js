import React from "react";
import { TypeButton } from "../typebutton/TypeButton";
import "./Type.css";

const Type = (props) => {
  return (
    <div className="type">
      <h2>Type</h2>
      {props.types.map((value, index) => {
        return (
          <TypeButton
            key={index}
            type={value.type.name}
            className={props.className}
          />
        );
      })}
    </div>
  );
};

export default Type;
