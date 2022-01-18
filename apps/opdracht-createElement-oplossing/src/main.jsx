import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

ReactDOM.render(
  React.createElement(
    "div",
    {
      className: "card",
    },
    React.createElement("h1", null, "Hoi wereld!")
  ),
  document.getElementById("root")
);
