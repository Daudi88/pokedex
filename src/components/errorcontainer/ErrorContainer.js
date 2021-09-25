import React from "react";
import "./ErrorContainer.css";

const ErrorContainer = () => {
  return (
    <div className="error-container">
      <h3>No Pokémon Matched Your Search!</h3>
      <h4>Try these suggestions to fins a Pokémon:</h4>
      <ul>
        <li className="error-tip">Reduce the number of search parameters</li>
        <li className="error-tip">Search only for one Pokémon at a time</li>
        <li className="error-tip">Search for parts of the name</li>
      </ul>
    </div>
  );
};

export default ErrorContainer;
