import React from "react";
import { useLocation } from "react-router";
import "./FavoritesView.css";

function HomeView() {
  const location = useLocation();
  return (
    <div className="favorites-view">
      <h1>This is the Favorites View!</h1>
      <p>{location.state}</p>
    </div>
  );
}

export default HomeView;
