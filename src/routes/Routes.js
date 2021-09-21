import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import RoutingPath from "./RoutingPath";
import PokedexView from "../views/pokedexview/PokedexView";
import DetailsView from "../views/detailsview/DetailsView";
import TestView from "../views/testview/TestView";

function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path={"/test"}>
          <TestView />
        </Route>
        <Route exact path={RoutingPath.detailsView}>
          <DetailsView />
        </Route>
        <Route path={RoutingPath.pokedexView}>
          <PokedexView />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
