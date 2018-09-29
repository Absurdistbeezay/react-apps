import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import About from "./components/About";
import Timer from "./components/Timer";
import ToDo from "./components/ToDo/ToDo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome To React Practice!</h1>
        </header>
        <About />
        <Timer />
        <ToDo />
      </div>
    );
  }
}

export default App;
