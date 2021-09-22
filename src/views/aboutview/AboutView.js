import React from "react";
import "./AboutView.css";

const AboutView = () => {
  return (
    <div className="view-container">
      <div className="heading-container">
        <h1>About</h1>
      </div>
      <div className="body-container">
        <p className="about-text">
          I built this page to learn{" "}
          <a href="https://reactjs.org/" target="_blank">
            React
          </a>{" "}
          and have been heavily inspired
          <br /> by{" "}
          <a href="https://www.pokemon.com/us/pokedex/" target="_blank">
            this website
          </a>{" "}
          and have tried to copy a lot of their concepts.
        </p>
      </div>
    </div>
  );
};

export default AboutView;
