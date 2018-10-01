import React from "react";

import About from "./About";
import Timer from "./Timer";
import ToDo from "./ToDo/ToDo";

const MainPage = () => {
  return (
    <React.Fragment>
      <About />
      <Timer />
      <ToDo />
    </React.Fragment>
  );
};

export default MainPage;
