import React from "react";
import { useLocation } from "react-router";

function HomeView() {
  const location = useLocation();
  return (
    <div>
      <h1>This is the Favorites View!</h1>
      <p>{location.state}</p>
    </div>
  );
}

export default HomeView;
