import React from "react";
import Home from "./Home";
import { Route, Switch } from "react-router";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Error from "./pages/Error";
import Login from "./components/Login/Login";
 import Dashboard from "./components/Dashboard/Dashboard";
 import Signup from "./components/Signup/Signup";
const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/service" component={Service}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/Dashboard" component={Dashboard}></Route>
        <Route path="/Signup" component={Signup}></Route>

        <Route component={Error}></Route>
      </Switch>
    </>
  );
};

export default App;
