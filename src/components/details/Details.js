import React from "react";
import { useHistory } from "react-router";
import RoutingPath from "../../routes/RoutingPath";
import Gauge from "../gauge/Gauge";
import Info from "../info/Info";
import Type from "../type/Type";
import Weaknesses from "../weaknesses/Weaknesses";
import "./Details.css";

const Details = (props) => {
  const history = useHistory();

  return (
    <div className="details-container">
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
      <div className="details-types-container">
        <Type className="btn-details" types={props.types} />
        <Weaknesses className="btn-details" weaknesses={props.weaknesses} />
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
