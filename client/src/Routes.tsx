import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import RegisterChallenge from "./pages/RegisterChallenge";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={RegisterChallenge} />
      </Switch>
    </Router>
  );
};

export default Routes;
