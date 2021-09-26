import React from "react";
import "./AboutView.css";

const AboutView = () => {
  return (
    <div className="view-container">
      <div className="heading-container">
        <h1 className="heading-title">About</h1>
      </div>
      <div className="about-body-container">
        <p className="about-text">
          I built this page to learn{" "}
          <a href="https://reactjs.org/" target="_blank">
            React
          </a>{" "}
          and have been heavily inspired by{" "}
          <a href="https://www.pokemon.com/us/pokedex/" target="_blank">
            this website
          </a>{" "}
          and have tried to mimic a lot of their concepts.
        </p>
      </div>
    </div>
  );
};

export default AboutView;
