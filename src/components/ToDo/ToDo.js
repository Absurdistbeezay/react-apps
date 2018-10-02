import React, { Component } from "react";
import firebase from "../../firebase";
import "./ToDo.css";

export class ToDo extends Component {
  state = {
    input: "",
    todoList: []
  };
  componentDidMount = () => {
    const todosRef = firebase.database().ref("todos");
    todosRef.on("value", snapshot => {
      const tasks = snapshot.val();
      const newState = [];
      for (let task in tasks) {
        newState.push({
          id: task,
          task: tasks[task]
        });
      }

      this.setState({
        todoList: newState
      });
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const todos = firebase.database().ref("todos");

    todos.push(this.state.input);
    this.setState({
      todoList: [],
      input: ""
    });
  };

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleDelete = taskId => {
    const taskToDelete = firebase.database().ref(`todos/${taskId}`);
    console.log(taskId);
    taskToDelete.remove();
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
              this.state.todoList.map(task => (
                <li key={task.id} style={{ position: "relative" }}>
                  {" "}
                  {task.task}{" "}
                  <i
                    onClick={() => {
                      this.handleDelete(task.id);
                    }}
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
