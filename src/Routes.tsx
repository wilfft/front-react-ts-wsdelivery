import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Navbar from "./Navbar";
import Ordens from "./Ordens";

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/ordens">
        <Ordens />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
