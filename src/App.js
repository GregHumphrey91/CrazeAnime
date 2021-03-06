import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Details from "./components/Pages/Details/Details";
import About from "./components/Pages/About/About";
import "semantic-ui-css/semantic.min.css";
import "./assets/styles/CSS/App.css";
import Navbar from "./components/Layout/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/details/:id" component={Details} />
      <Route path="/about" component={About} />
    </div>
  );
};

export default App;
