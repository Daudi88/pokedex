import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import RoutingPath from "./RoutingPath";
import PokedexView from "../views/pokedexview/PokedexView";
import SigninView from "../views/signinview/SigninView";

function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path={RoutingPath.pokedexView}>
          <PokedexView />
        </Route>
        <Route path={RoutingPath.signinView}>
          <SigninView />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
