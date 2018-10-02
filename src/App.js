import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
//components
import MainPage from "./components/MainPage";
import FunFood from "./components/NextPage/FunFood";
import Song from "./components/NextPage/Songs.js/Song";

class App extends Component {
  state = {
    isHome: true,
    buttonContentHome: true
  };
  handleClick = () => {
    this.setState(prevState => ({
      isHome: !prevState.isHome,
      buttonContentHome: !prevState.buttonContentHome
    }));
  };
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="navbar">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome To React Practice!</h1>
            </header>
          </div>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/next" component={FunFood} />
            <Route path="/song" component={Song} />
          </Switch>
          <Link
            className="nxt-btn"
            to={this.state.isHome ? "/next" : "/"}
            onClick={this.handleClick}
          >
            {this.state.buttonContentHome ? "Next Page" : "Previous Page"}
          </Link>
          <hr />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
