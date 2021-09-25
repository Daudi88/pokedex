import React, { useEffect } from "react";
import "./Hamburger.css";

const Hamburger = (props) => {
  useEffect(() => {
    if (props.open) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [props.open]);

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
