import React from "react";

const About = () => {
  return (
    <div
      style={{
        margin: "auto",
        marginTop: "16px",
        width: "60%",
        border: "3px yellow solid",
        backgroundColor: "#333",
        padding: "10px",
        marginBottom: "10px"
      }}
    >
      <p
        className="about"
        style={{
          color: "#fff"
        }}
      >
        <i>
          This is just a React Practice Platform. There is nothing fancy here.
        </i>
      </p>
    </div>
  );
};

export default About;
