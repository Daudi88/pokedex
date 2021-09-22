import React from "react";
import "./AboutView.css";

const AboutView = () => {
  return (
    <div className="view-container">
      <div className="heading-container">
        <h1>About</h1>
      </div>
      <div className="body-container">
        <p>
          I built this page to learn React and have tried to make it as similar
          to{" "}
          <a href="https://www.pokemon.com/us/pokedex/" target="_blank">
            this website
          </a>{" "}
          as I could.
        </p>
      </div>
    </div>
  );
};

export default AboutView;
