import React from "react";
import { useHistory } from "react-router";
import RoutingPath from "../../routes/RoutingPath";
import Gauge from "../gauge/Gauge";
import Info from "../info/Info";
import Type from "../type/Type";
import formatId from "../../shared/functions/formatId";
import "./Details.css";

const Details = (props) => {
  const history = useHistory();

  return (
    <div className="details-container">
      <h2 className="details-title">
        {props.name} <span className="details-id">{formatId(props.id)}</span>
      </h2>
      <img className="details-img" src={props.img} alt="" />
      <div className="stats-container">
        <h3 className="stats-title">Stats</h3>
        <ul className="stats-table">
          {props.stats.map((stat, index) => (
            <Gauge key={index} value={stat.base_stat} name={stat.stat.name} />
          ))}
        </ul>
      </div>
      <p className="details-description">{props.description}</p>
      <div className="info-container">
        <div>
          <Info name="Height" value={props.info.height} unit="m" />
          <Info name="Weight" value={props.info.weight} unit="kg" />
        </div>
        <Info name="Abilities" values={props.info.abilities} />
      </div>
      <div className="types-container">
        <Type className="btn-details" types={props.types} />
      </div>
      <button
        className="btn btn-go-back"
        onClick={() => history.push(RoutingPath.pokedexView)}
      >
        Explore More Pokémon
      </button>
    </div>
  );
};

export default Details;
