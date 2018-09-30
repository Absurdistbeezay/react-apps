import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
//components
import MainPage from "./components/MainPage";
import NextBtn from "./components/widgets/NextBtn";
//TO DELETE
import Test from "./components/NextPage/Test";

class App extends Component {
  state = {
    isHome: true
  };
  handleClick = () => {
    this.setState(prevState => ({
      isHome: !prevState.isHome
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
            <Route path="/next" component={Test} />
          </Switch>
          <NextBtn
            to={this.state.isHome ? "/next" : "/"}
            onClick={this.handleClick}
          />
          <hr />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
