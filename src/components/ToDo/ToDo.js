import React, { Component } from "react";
import "./ToDo.css";

export class ToDo extends Component {
  state = {
    input: "",
    todoList: []
  };
  handleSubmit = e => {
    e.preventDefault();
    //TODO
    this.state.todoList.push(this.state.input);
    this.setState({
      todoList: this.state.todoList,
      input: ""
    });
  };

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleDelete = e => {
    const targetToDelete = e.target.parentNode.textContent;
    console.log(targetToDelete);

    const filteredTodos = this.state.todoList.filter(
      //trim to delete space
      todo => todo != targetToDelete.trim()
    );
    console.log(filteredTodos);
    this.setState({
      todoList: filteredTodos
    });
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="form">
          <div className="row">
            <input
              value={this.state.input}
              type="text"
              onChange={this.handleChange}
            />
            <button type="submit">Add</button>
          </div>
        </form>

        <div className="result-container">
          <h3>Tasks to be completed:</h3>
          <ol>
            {this.state.todoList.length === 0 ? (
              <div style={{ textAlign: "center", color: "red" }}>
                No task to do. Please Add.
              </div>
            ) : (
              this.state.todoList.map((task, i) => (
                <li key={i} style={{ position: "relative" }}>
                  {" "}
                  {task}{" "}
                  <i
                    onClick={this.handleDelete}
                    className="fas fa-times close"
                    style={{ color: "red", position: "absolute", right: "0px" }}
                  />
                </li>
              ))
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default ToDo;
