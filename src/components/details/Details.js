import React from "react";
import Gauge from "../gauge/Gauge";
import "./Details.css";
import Info from "../info/Info";

function Details(props) {
  return (
    <div className="details-wrapper">
      <h2 className="details-title">
        {props.name} <span className="details-id">{props.id}</span>
      </h2>
      <img className="details-img" src={props.img} alt="" />
      <div className="stats-wrapper">
        <h3 className="stats-title">Stats</h3>
        <ul className="stats-table">
          <Gauge value={props.stats.hp} name="HP" />
          <Gauge value={props.stats.attack} name="Attack" />
          <Gauge value={props.stats.defense} name="Defense" />
          <Gauge value={props.stats.specialAttack} name="Special Attack" />
          <Gauge value={props.stats.specialDefense} name="Special Defence" />
          <Gauge value={props.stats.speed} name="Speed" />
        </ul>
      </div>
      <p className="details-description">{props.description}</p>
      <div className="info-wrapper">
        <div>
          <Info name="Height" value={props.info.height} unit="m" />
          <Info name="Weight" value={props.info.weight} unit="kg" />
        </div>
        <Info name="Abilities" values={props.info.abilities} />
      </div>
    </div>
  );
}

export default Details;
