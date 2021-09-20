import React, { useEffect, useState } from "react";
import "./Gauge.css";

function Gauge(props) {
  const [isAnimate, setIsAnimate] = useState(false);
  function getValue(value) {
    if (value < 20) {
      return "92%"; // 1
    } else if (value < 35) {
      return "86%"; // 2
    } else if (value < 52) {
      return "80%"; // 3
    } else if (value < 69) {
      return "72%"; // 4
    } else if (value < 87) {
      return "66%"; // 5
    } else if (value < 105) {
      return "60%"; // 6
    } else if (value < 120) {
      return "52%"; // 7
    } else if (value < 140) {
      return "46%"; // 8
    } else if (value < 154) {
      return "40%"; // 9
    } else if (value < 180) {
      return "32%"; // 10
    } else if (value < 250) {
      return "26%"; // 11
    } else {
      return "0%"; // 15
    }
  }

  useEffect(() => {
    setIsAnimate(true);
    console.log("I want to be true");
  }, []);

  return (
    <li key={Math.random()}>
      <ul className="gauge">
        <li
          id="meter"
          className="meter"
          style={{
            top: getValue(props.value),
            animationName: isAnimate ? "fadein" : "unset",
            animationDuration: "2s",
            animationDelay: props.animationDelay,
          }}
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
      <span className="gauge-name">{props.name}</span>
    </li>
  );
}

export default Gauge;
