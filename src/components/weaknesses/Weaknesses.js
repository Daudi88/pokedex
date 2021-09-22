import React from "react";
import { TypeButton } from "../typebutton/TypeButton";
import "./Weaknesses.css";

const Weaknesses = (props) => {
  return (
    <div className="weaknesses-container">
      <h2 className="weaknesses-title">Weaknesses</h2>
      <div className="btns-container">
        {props.weaknesses.map((value, index) => {
          return (
            <TypeButton key={index} type={value} className={props.className} />
          );
        })}
      </div>
    </div>
  );
};

export default Weaknesses;
