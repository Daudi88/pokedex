import React from "react";
import capitalize from "../../shared/functions/capitalize";
import "./Gauge.css";

const Gauge = (props) => {
  const getValue = (value) => {
    if (value < 20) {
      return "92%";
    } else if (value < 35) {
      return "86%";
    } else if (value < 52) {
      return "80%";
    } else if (value < 69) {
      return "72%";
    } else if (value < 87) {
      return "66%";
    } else if (value < 105) {
      return "60%";
    } else if (value < 120) {
      return "52%";
    } else if (value < 140) {
      return "46%";
    } else if (value < 154) {
      return "40%";
    } else if (value < 180) {
      return "32%";
    } else if (value < 250) {
      return "26%";
    } else {
      return "0%";
    }
  };

  return (
    <li key={Math.random()}>
      <ul className="gauge">
        <li
          id="meter"
          className="meter"
          style={{ top: getValue(props.value) }}
        ></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <span className="gauge-name">{capitalize(props.name)}</span>
    </li>
  );
};

export default Gauge;
