import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "../About/About";
import Blog from "../Blog/Blog";

export default function () {
  return (
    <Router>
      <Switch>
        <Route path="/Blog">
          <Blog />
        </Route>
        <Route path="/">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}
