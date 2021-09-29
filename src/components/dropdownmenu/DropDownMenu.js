import React from "react";
import "./DropDownMenu.css";

const DropDownMenu = (props) => {
  const handleClick = (event) => {
    props.setOpen(!props.open);
    props.setDropDownTitle(event.target.innerHTML);
  };

  return (
    <div
      className={`drop-down-menu ${props.className}-drop-down-menu`}
      style={{ display: !props.open ? "none" : "" }}
    >
      {props.options.map((option) => {
        return (
          <button
            key={Math.random()}
            onClick={(event) => handleClick(event)}
            className={`drop-down-item ${props.className}-drop-down-item`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default DropDownMenu;
