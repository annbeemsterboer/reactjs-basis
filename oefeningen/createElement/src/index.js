import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// opdracht 1: gebruik .createElement() om een h1
// in de onderstaande div te plaatsen

// opdracht 2: voeg een input element in
// met als placeholder tekst "Voornaam"

// opdract 3: Schrijf de code van opdracht 1 nu als JSX

ReactDOM.render(
  React.createElement("div", {
    className: "card",
  },
  React.createElement("h1", null, "Hello World")),
  document.getElementById("root")
);
