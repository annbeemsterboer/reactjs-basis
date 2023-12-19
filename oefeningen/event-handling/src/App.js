import React from "react"
import "./App.css"

// oefening 1a: zorg ervoor dat de onClick functie wordt uitgevoerd
// wanneer er op de button wordt geklikt

// oefening 1b: maak een tweede knop en zorg ervoor dat in de alert te zien is op welke
// knop geklikt is, terwijl je gebruik maakt van dezelfde event handler (onClick).
// Hint: de informatie die je nodig hebt zit in de property `target` van de event,
// welke je ontvangt als een parameter `event` in de onClick functie.

function App() {
  const onClick = () => {
    alert("I was clicked!")
  }

  return (
    <div className="container">
      <button name="button1" className="button">
        Click me
      </button>
    </div>
  )
}

// oefening 2: maak het vierkant interactief. Gebruik onderstaande App component.
// Zorg ervoor dat jouw code de volgende events mbt het vierkant kan afhandelen:
// event 1: onMouseEnter, log naar de console: `Aangeraakt!`
// event 2: onDoubleClick, log naar de console: `Jij bent m!`
// event 3: onKeyDown, log naar de console: `Toets!`

// function App() {
//   return (
//     <div className="container">
//       <div className="square" />
//     </div>
//   );
// }

export default App