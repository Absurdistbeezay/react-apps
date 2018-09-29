import React, { Component } from "react";
import "./ToDo.css";

export class ToDo extends Component {
  render() {
    return (
      <div className="container">
        <form className="form">
          <div className="row">
            <input type="text" />
            <button>Add</button>
          </div>
        </form>
        <div className="result-container">
          <h3>Tasks to be completed:</h3>
          <ol>
            <li>Car Wash.</li>
            <li>Do shopping</li>
          </ol>
        </div>
      </div>
    );
  }
}

export default ToDo;
