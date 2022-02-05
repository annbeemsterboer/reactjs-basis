import React from "react";
import Fruit from "./components/Fruit";
import "./App.css";

// oefening 1: in de fruitmand, toon 6 appels.
// Dit kun je doen door een prop met naam `type` mee te geven aan het Fruit component (child)

const fruits = [];

function App() {
  return (
    <div className="container">
      <div className="basket">
        <Fruit />
      </div>
    </div>
  );
}

export default App;

// oefening 2: in de fruitmand, toon 3 appels en 4 bananen

// oefening 3: in de fruitmand, toon 10 appels.
// Zorg ervoor dat, wanneer er op een appel wordt geklikt, deze verdwijnt uit de mand.
