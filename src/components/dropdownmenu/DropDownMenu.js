import React from "react";
import "./DropDownMenu.css";

const DropDownMenu = (props) => {
  const handleClick = (event) => {
    props.setOpen(!props.open);
    props.setDropDownTitle(event.target.innerHTML);
    console.log(`${props.className}-drop-down-item`);
  };

  return (
    <div
      className={`drop-down-menu ${props.className}-drop-down-menu`}
      style={{ display: !props.open ? "none" : "" }}
    >
      {props.options.map((option) => {
        return (
          <button
            onClick={(event) => handleClick(event)}
            className={`drop-down-item ${props.className}-drop-down-item`}
          >
            {option}
          </button>
        );
      })}

      {/* <button onClick={(event) => handleClick(event)} className="btn-drop-down">
        Lowest Number (First)
      </button>
      <button onClick={(event) => handleClick(event)} className="btn-drop-down">
        Highest Number (First)
      </button>
      <button onClick={(event) => handleClick(event)} className="btn-drop-down">
        A-Z
      </button>
      <button onClick={(event) => handleClick(event)} className="btn-drop-down">
        Z-A
      </button> */}
    </div>
  );
};

export default DropDownMenu;
