import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Brand from "../components/brand/Brand";
import Navbar from "../components/navbar/Navbar";
import RoutingPath from "./RoutingPath";
import PokedexView from "../views/pokedexview/PokedexView";
import DetailsView from "../views/detailsview/DetailsView";
import AboutView from "../views/aboutview/AboutView";
import Footer from "../components/footer/Footer";

const Routes = () => {
  return (
    <BrowserRouter>
      <Brand />
      <Navbar />
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
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
