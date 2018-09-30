import React from "react";
import { Link } from "react-router-dom";
import "./NextBtn.css";

const NextBtn = props => {
  return (
    <Link className="nxt-btn" to={props.to}>
      Next Page
    </Link>
  );
};

export default NextBtn;
