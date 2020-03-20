import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//Import Components

import Main from "./components/Main";
import Blog from './components/Blog';


export default function App(){
  return(
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Blog">
            <Blog/>
          </Route>
          <Route path="/">
            <Main/>
          </Route>
        </Switch>
    </Router>
  )
}