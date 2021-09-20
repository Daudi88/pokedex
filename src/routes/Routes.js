import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import RoutingPath from "./RoutingPath";
import PokedexView from "../views/pokedexview/PokedexView";
import SigninView from "../views/signinview/SigninView";
import TestView from "../views/testview/TestView";

function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path={"/test"}>
          <TestView />
        </Route>
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
