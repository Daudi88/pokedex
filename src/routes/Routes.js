import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RoutingPath from "./RoutingPath";
import PokedexView from "../views/pokedexview/PokedexView";
import DetailsView from "../views/detailsview/DetailsView";
import AboutView from "../views/aboutview/AboutView";

function Routes({ children }) {
  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route exact path={RoutingPath.detailsView}>
          <DetailsView />
        </Route>
        <Route exact path={RoutingPath.aboutView}>
          <AboutView />
        </Route>
        <Route path={RoutingPath.pokedexView}>
          <PokedexView />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
