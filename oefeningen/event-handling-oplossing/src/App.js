import React from "react";
import "./App.css";

// oefening 1a:

// function App() {
//   const onClick = () => {
//     alert("I was clicked!");
//   };

//   return (
//     <div className="container">
//       <button name="button1">Click me</button>
//     </div>
//   );
// }

export default App;

// oefening 1b:
// let op het verschil tussen de implementatie voor onClick button 1 versus button 2
// bij Button 2 ontvangt de onClick functie een parameter `e`. Dit is een `Synthetic Event`
// elke event handler in react ontvangt een synthetic event, daarom is het niet perse
// nodig deze expliciet als paramter mee te geven, en werkt de implementatie van Button 1 ook.

function App() {
  const onClick = (event) => {
    // gebruik string interpolation om de naam van de button weer te geven in `message`
    const message = `${event.target.name} was clicked!`;
    alert(message);
  };

  return (
    <div className="container">
      <button name="Button 1" onClick={onClick}>
        Button 1
      </button>
      <button name="Button 2" onClick={(e) => onClick(e)}>
        Button 2
      </button>
    </div>
  );
}

// oefening 2:

// function App() {
//   return (
//     <div className="container">
//       <div
//         className="square"
//         tabIndex={0}
//         onMouseEnter={() => console.log("Aangeraakt!")}
//         onDoubleClick={() => console.log("Jij bent m!")}
//         onKeyDown={() => console.log("Toets!")}
//       ></div>
//     </div>
//   );
// }
