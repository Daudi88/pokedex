import React, { useEffect, useState } from "react";
import { TypeButton } from "../typebutton/TypeButton";
import "./AdvancedButton.css";

const AdvancedButton = (props) => {
  const [isTypeSelected, setIsTypeSelected] = useState(false);
  const [isWeaknessSelected, setIsWeaknessSelected] = useState(false);

  const handleTypeClick = () => {
    if (props.types.includes(props.typeTitle)) {
      props.setTypes(props.types.filter((type) => type !== props.typeTitle));
    } else {
      props.setTypes([...props.types, props.typeTitle]);
    }
  };

  const handleWeaknessClick = () => {
    if (props.weaknesses.includes(props.typeTitle)) {
      props.weaknesses.filter((weakness) => weakness !== props.typeTitle);
    } else {
      props.setWeaknesses([...props.weaknesses, props.typeTitle]);
    }
  };

  useEffect(() => {
    if (props.types.includes(props.typeTitle)) {
      setIsTypeSelected(true);
    } else {
      setIsTypeSelected(false);
    }

    if (props.weaknesses.includes(props.typeTitle)) {
      setIsWeaknessSelected(true);
    } else {
      setIsWeaknessSelected(false);
    }

    if (props.isReset) {
      setIsTypeSelected(false);
      setIsWeaknessSelected(false);
    }
  }, [props.types, props.weaknesses, props.isReset]);

  return (
    <div className="advanced-button">
      <TypeButton
        type={props.typeTitle}
        className="btn-advanced"
        isClickable={false}
      />
      <div
        className="btn-advanced-circle"
        onClick={handleTypeClick}
        style={{
          background: isTypeSelected ? "var(--clr-blue)" : "#fff",
        }}
      >
        <span className="advanced-circle-content">T</span>
      </div>
      <div
        className="btn-advanced-circle"
        onClick={handleWeaknessClick}
        style={{
          background: isWeaknessSelected ? "var(--clr-blue)" : "#fff",
        }}
      >
        <span className="advanced-circle-content">W</span>
      </div>
    </div>
  );
};

export default AdvancedButton;
