import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import "./Card.css";

function Card(props) {
  const [isFavorite, setIsFavorite] = useState(false);

  function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  function getId(num) {
    return num < 10 ? "00" + num : num < 100 ? "0" + num : num;
  }

  function handleClick() {
    setIsFavorite(!isFavorite);
  }

  return (
    <div className="card-wrapper">
      <h2 className="card-title">
        {capitalize(props.name)}{" "}
        <span className="card-id">#{getId(props.id)}</span>
      </h2>
      <StarIcon
        className="star"
        fontSize="large"
        style={{ display: isFavorite ? "block" : "none" }}
      />
      <div className="card-container">
        <img className="card-img" src={props.img} alt="" />
        <div className="card-subcontainer">
          <p className="card-description">{props.description}</p>
          <button className="btn-favorite" onClick={handleClick}>
            {!isFavorite ? "Set Favorite" : "Remove Favorite"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
