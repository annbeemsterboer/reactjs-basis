import React from "react";
import Confetti from "react-confetti";

import "./App.css";

// oefening 1: Maak een component die een getal tussen de 1 en 6 toont. Als het getal gelijk is aan 6,
// moet de component een confetti-explosie laten zien. Voor het tonen van de confetti-explosie gebruiken
// we een NPM-package van iemand anders (react-confetti).

export default function App() {
  return (
    <section className="container">
      <Confetti />
      <div className="display">6</div>
    </section>
  );
}

// oefening 2: Hetzelfde als oefening 1, maar nu met een knop waarmee je
// opnieuw met de dobbelsteen gooit en een nieuwe uitkomst te zien krijgt.
// Hiervoor heb je de hook useState() nodig.
