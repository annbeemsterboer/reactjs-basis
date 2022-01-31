import React from "react";
import "./App.css";

// oefening 1: zorg ervoor dat de onClick functie wordt uitgevoerd
// wanneer er op de button wordt geklikt

// function App() {
//   const onClick = () => {
//     alert("I was clicked!");
//   };

//   return (
//     <div className="App">
//       <button name="button1">Click me</button>
//     </div>
//   );
// }

export default App;

// oefening 2: maak een tweede knop en zorg ervoor dat in de alert te zien is op welke
// knop geklikt is, terwijl je gebruik maakt van dezelfde event handler (onClick).
// Hint: de informatie die je nodig hebt zit in de property `target` van de event,
// welke je ontvangt als een parameter `event` in de onClick functie.

function App() {
  const onClick = (event) => {
    // gebruik string interpolation om de naam van de button weer te geven in `message`
    const message = `.. was clicked!`;
    alert(message);
  };

  return (
    <div className="App">
      <button name="button1" onClick={onClick}>
        Click button 1
      </button>
      {/* voeg hier een tweede button toe */}
    </div>
  );
}
