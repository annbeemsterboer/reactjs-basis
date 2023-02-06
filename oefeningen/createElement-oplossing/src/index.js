import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// opdracht 1
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

// opdracht 2
// ReactDOM.render(
//   React.createElement(
//     "div",
//     {
//       className: "card",
//     },
//     React.createElement("input", { placeholder: "Voornaam" })
//   ),
//   document.getElementById("root")
// );

// opdracht 3
// ReactDOM.render(
//   <div className="card">
//     <h1>Hallo wereld!</h1>
//   </div>,
//   document.getElementById("root")
// );
