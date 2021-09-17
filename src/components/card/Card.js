import React from "react";
import StarIcon from "@mui/icons-material/Star";
import "./Card.css";

function Card(props) {
  function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  function getId(num) {
    return num < 10 ? "00" + num : num < 100 ? "0" + num : num;
  }

  return (
    <div className="card-wrapper">
      <h2 className="card-title">
        {capitalize(props.name)}{" "}
        <span className="card-id">#{getId(props.id)}</span>
      </h2>
      <img className="card-img" src={props.img} alt="" />
      <p className="card-description">{props.description}</p>
    </div>
  );
}

export default Card;
