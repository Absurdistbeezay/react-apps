import React, { Component } from "react";
import firebase from "../../firebase";
import "./FunFood.css";

class FunFood extends Component {
  state = {
    currentItem: "",
    username: "",
    items: []
  };
  componentDidMount = () => {
    const itemsRef = firebase.database().ref("items");
    itemsRef.on("value", snapshot => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user
        });
      }
      this.setState({
        items: newState
      });
    });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const itemsRef = firebase.database().ref("items");

    const item = {
      title: this.state.currentItem,
      user: this.state.username
    };
    itemsRef.push(item);
    this.setState({
      currentItem: "",
      username: "",
      items: []
    });
  };

  removeItem = itemId => {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  };

  render() {
    return (
      <div className="FunContainer">
        <section className="add-item">
          <form onSubmit={this.handleSubmit}>
            <input
              className="input"
              type="text"
              name="username"
              value={this.state.username}
              placeholder="What's your name?"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="currentItem"
              placeholder="What are you bringing?"
              className="input"
              value={this.state.currentItem}
              onChange={this.handleChange}
            />
            <button className="fun-btn">Add Item</button>
          </form>
        </section>
        <section className="display-item">
          <div className="wrapper">
            <ul>
              {this.state.items.map(item => {
                return (
                  <li key={item.id}>
                    <h3>{item.title}</h3>
                    <p>Brought By: {item.user}</p>
                    <button
                      onClick={() => this.removeItem(item.id)}
                      className="fun-btn"
                    >
                      Remove Item
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default FunFood;
