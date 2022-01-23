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

// Met JSX

// ReactDOM.render(
//   <div className="card">
//     <h1>Hallo wereld!</h1>
//   </div>,
//   document.getElementById("root")
// );
