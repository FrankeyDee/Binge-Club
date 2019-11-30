import React from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import './index.css';
import "./App.css";
import Nav from "./components/Nav";
import { LoginTest, Register } from "./components/LoginTest";
import Home from "./components/Home";
import LoginTestShow from "./components/LoginTestShow";
import SavedShow from "./components/SavedShow/Saved.js";
import Secure from "./components/Secure";



function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* <IndexRoute /> */}
          
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginTest} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/loginshow" component={LoginTestShow} />
          <Route exact path="/saved" component={SavedShow} />
          <Route exact path="/secure" component={Secure} />
        
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
