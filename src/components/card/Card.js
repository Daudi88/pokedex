import React from "react";
import { TypeButton } from "../typebutton/TypeButton";
import { useHistory } from "react-router";
import RoutingPath from "../../routes/RoutingPath";
import formatId from "../../shared/functions/formatId";
import "./Card.css";

const Card = (props) => {
  const history = useHistory();
  return (
    <div
      className="card-container"
      onClick={() => history.push(RoutingPath.detailsView, props.id)}
    >
      <img className="card-img" src={props.img} alt={props.name} />
      <div className="card-info-container">
        <p className="card-id">{formatId(props.id)}</p>
        <h3 className="card-name">{props.name}</h3>
        <div className="card-types-container">
          {props.types.map((value, index) => {
            return (
              <TypeButton
                className="btn-card"
                key={index}
                type={value.type.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
