import React from "react"

import Accordion from "./components/Accordion"
import receptData from "./receptData"

import "./App.css"

// doel: Het "up liften" van de open/gesloten weergave van panels
// naar de parent Accordion component.

// oefening 1: Pas het panel component zo aan dat de weergave van open of gesloten
// wordt bepaald door de props in plaats van de state.
// Controleer de werking door de panels hardcoded te openen en te sluiten.

// oefening 2 a: Houd nu de state bij in de accordion en open/sluit de panels
// op basis van deze state

// oefening 2 b: Pas de state zo aan dat panels individueel geopend worden.
// Op zo'n manier dat er altijd maar één panel te gelijk op kan zijn.

// oefening 3: Maak het mogelijk om een panel ook weer te sluiten als deze open is.

// (optioneel) oefening 4: Pas het Accordion component zo aan dat er meerdere panels
// tegelijk op en dicht kunnen. Eventueel maak je de accordion configureerbaar met een prop.
// Waarmee je kunt bepalen of er maar 1 panel of meerdere tegelijk open kunnen zijn.

function App() {
  return (
    <div className="container">
      <Accordion title={receptData.title} panels={receptData.stappen} />
    </div>
  )
}

export default App