import React, { useState } from "react";
import { TypeButton } from "../typebutton/TypeButton";
import "./AdvancedButton.css";

const AdvancedButton = (props) => {
  const [isTypeSelected, setIsTypeSelected] = useState(false);
  const [isWeaknessSelected, setIsWeaknessSelected] = useState(false);

  const handleTypeSelected = () => {
    setIsTypeSelected(!isTypeSelected);
  };

  const handleWeaknessSelected = () => {
    setIsWeaknessSelected(!isWeaknessSelected);
  };

  return (
    <div className="advanced-button">
      <TypeButton
        type={props.type}
        className="btn-advanced"
        isClickable={false}
      />
      <div
        className="btn-advanced-circle"
        onClick={handleTypeSelected}
        style={{ background: isTypeSelected ? "var(--clr-blue)" : "#fff" }}
      >
        <span className="advanced-circle-content">T</span>
      </div>
      <div
        className="btn-advanced-circle"
        onClick={handleWeaknessSelected}
        style={{ background: isWeaknessSelected ? "var(--clr-blue)" : "#fff" }}
      >
        <span className="advanced-circle-content">W</span>
      </div>
    </div>
  );
};

export default AdvancedButton;
