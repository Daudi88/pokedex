import React from "react";
import "./Loader.css";

function Loader() {
  return (
    <div id="loader" className="loader-container">
      <div className="middle">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
}

export default Loader;
