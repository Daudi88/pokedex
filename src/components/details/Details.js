import React from "react";
import Gauge from "../gauge/Gauge";
import "./Details.css";
import Info from "../info/Info";
import Type from "../type/Type";

function Details(props) {
  return (
    <div className="details-container">
      <h2 className="details-title">
        {props.name} <span className="details-id">{props.id}</span>
      </h2>
      <img className="details-img" src={props.img} alt="" />
      <div className="stats-container">
        <h3 className="stats-title">Stats</h3>
        <ul className="stats-table">
          {props.stats.map((stat) => {
            return <Gauge value={stat.base_stat} name={stat.stat.name} />;
          })}
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
        <Type types={props.types} />
      </div>
    </div>
  );
}

export default Details;
