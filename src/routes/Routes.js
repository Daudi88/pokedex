import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RoutingPath from "./RoutingPath";
import PokedexView from "../views/pokedexview/PokedexView";
import FavoritesView from "../views/favoritesview/FavoritesView";

function Routes(props) {
  return (
    <BrowserRouter>
      {props.children}
      <Switch>
        <Route exact path={RoutingPath.favoritesView}>
          <FavoritesView />
        </Route>
        <Route path={RoutingPath.pokedexView}>
          <PokedexView />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
