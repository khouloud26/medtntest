import React from 'react';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import Article from "./Components/article";
import Home from "./Components/Home";
import Rendezvous from "./Components/rendezvous";
import Service from "./Components/service";
import Question from "./Components/question";
import NavBar from "./Components/Navbar"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";


function App() {
  return (
    <div className="App">
        <Router>
        <NavBar />


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home" component={Home} >
              <Home />
          </Route>
          <Route path="/rendezvous" component={Rendezvous}>
            <Rendezvous />
          </Route>
          <Route path="/service" component={Service}>
            <Service />
          </Route>
          <Route path="/article" component={Article}>
            <Article />
          </Route>
          <Route path="/question" component={Question}>
            <Question />
          </Route>
          <Route path="/" component={Home} >
              <Home />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
