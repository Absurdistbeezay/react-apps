import React, { Component } from "react";
import Moment from "react-moment";

export class Timer extends Component {
  state = {
    dateNow: new Date().toLocaleString()
  };

  updateTime = () => {
    this.setState({
      dateNow: new Date().toLocaleString()
    });
  };

  componentDidMount = () => {
    setInterval(this.updateTime, 1000);
  };
  componentWillMount = () => {
    this.updateTime = false;
  };
  render() {
    return (
      <div
        style={{
          fontSize: "20px",
          fontFamily: `'Abril Fatface', 'cursive'`,
          letterSpacing: "2px",
          border: "2px solid orange",
          background: "DarkGreen",
          color: "#fff",
          margin: "auto",
          width: "60%",
          padding: "10px"
        }}
      >
        <div>
          <i className="fas fa-calendar-alt" style={{ color: "lightBlue" }} />{" "}
          Today's Date:{" "}
          <Moment format="MM/DD/YYYY">{this.state.dateNow}</Moment>
        </div>
        <div>
          <i className="fas fa-clock" style={{ color: "lightGreen" }} /> Current
          Time: <Moment format="hh:mm:ss a">{this.state.dateNow}</Moment>
        </div>
      </div>
    );
  }
}

export default Timer;
