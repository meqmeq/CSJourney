import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About.js";
import Home from "./pages/Home.js";
import Contact from "./pages/Contact.js";
import Stack from "./pages/Stack.js";
import Navi from "./components/NavBar.js";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navi />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/stack" component={Stack} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
