import React from "react";
import Confetti from "react-confetti";
import { useState } from "react";
import "./App.css";

// oefening 1: Maak een component die een willekeurig getal tussen de 1 en 6 toont.
// Als het getal gelijk is aan 6, moet de component een confetti-explosie laten zien.
// Voor het tonen van de confetti-explosie gebruiken
// we een NPM-package van iemand anders (react-confetti).

function diceRoll() {
  return Math.floor(Math.random() * 6) + 1;
}

export default function App() {
  const ogen = diceRoll();

  return (
    <section className="container">
      {ogen === 6 && <Confetti />}
      <div className="display">{ogen}</div>
    </section>
  );
}

// oefening 2: Hetzelfde als oefening 1, maar nu met een knop waarmee je
// opnieuw met de dobbelsteen gooit en een nieuwe uitkomst te zien krijgt.
// Hiervoor heb je de hook useState() nodig.

// function diceRoll() {
//   return Math.floor(Math.random() * 6) + 1;
// }

// export default function App() {
//   const [ogen, setOgen] = useState(diceRoll());

//   function handleClick() {
//     setOgen(diceRoll());
//   }

//   return (
//     <section className="container">
//       {ogen === 6 && <Confetti />}
//       <div className="display">{ogen}</div>
//       <button onClick={handleClick}>Nog een keer</button>
//     </section>
//   );
// }

// oefening 3: Als de gebruiker 1 gooit,
// is hij af en kan hij niet opnieuw gooien.
// Schrijf de code!

// function diceRoll() {
//   return Math.floor(Math.random() * 6) + 1;
// }

// export default function App() {
//   const [ogen, setOgen] = useState(diceRoll());

//   function handleClick() {
//     setOgen(diceRoll());
//   }

//   if (ogen === 6) return <section className="container">Je bent af</section>;

//   return (
//     <section className="container">
//       {ogen === 6 && <Confetti />}
//       <div className="display">{ogen}</div>
//       <button onClick={handleClick}>Nog een keer</button>
//     </section>
//   );
// }
