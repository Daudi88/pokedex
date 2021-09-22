import React from "react";
import { TypeButton } from "../typebutton/TypeButton";
import "./Weaknesses.css";

const Weaknesses = (props) => {
  return (
    <div className="weaknesses-container">
      <h2 className="weaknesses-title">Weaknesses</h2>

      {props.weaknesses.map((value, index) => {
        return (
          <TypeButton key={index} type={value} className={props.className} />
        );
      })}

      {/* {props.weaknesses.map((values) => {
        return (
          <TypeButton
            key={index}
            type={value.type.name}
            className={props.className}
          />
        );
      })} */}
    </div>
  );
};

export default Weaknesses;
