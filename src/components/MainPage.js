import React from "react";

import About from "./About";
import Timer from "./Timer";
import ToDo from "./ToDo/ToDo";

const MainPage = () => {
  return (
    <div className="main-container">
      <About />
      <Timer />
      <ToDo />
    </div>
  );
};

export default MainPage;
