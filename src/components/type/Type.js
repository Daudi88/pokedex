import React from "react";
import { TypeButton } from "../typebutton/TypeButton";
import "./Type.css";

const Type = (props) => {
  return (
    <div className="type-container">
      <h2 className="type-title">Type</h2>
      <div className="btns-container">
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
    </div>
  );
};

export default Type;
