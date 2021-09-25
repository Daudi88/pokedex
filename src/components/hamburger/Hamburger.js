import React from "react";
import "./Hamburger.css";

const Hamburger = (props) => {
  const handleClick = () => {
    props.setOpen(!props.open);
  };

  return (
    <div
      className="hamburger-container"
      onClick={handleClick}
      style={{ background: props.open ? "black" : "var(--clr-black)" }}
    >
      <div
        style={{ background: props.open ? "var(--clr-black)" : "#fff" }}
      ></div>
      <div
        style={{ background: props.open ? "var(--clr-black)" : "#fff" }}
      ></div>
      <div
        style={{ background: props.open ? "var(--clr-black)" : "#fff" }}
      ></div>
    </div>
  );
};

export default Hamburger;
