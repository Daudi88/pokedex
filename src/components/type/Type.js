import React from "react";
import { TypeButton } from "../typebutton/TypeButton";
import "./Type.css";

const Type = (props) => {
  return (
    <div className="type-container">
      <h2 className="type-title">Type</h2>
      <div className="type-btns-container">
        {props.types.map((value, index) => {
          return (
            <TypeButton
              key={index}
              type={value.type.name}
              className={props.className}
              isClickable={props.isClickable}
              isType={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Type;
