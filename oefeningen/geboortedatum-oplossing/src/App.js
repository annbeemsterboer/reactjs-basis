import React from "react";
import "./App.css";

// oefening 1: maak een html-formulier met een inputveld en een verzendknop.

// export default function App() {
//   return (
//     <form>
//       <input
//         type="date"
//         placeholder="Je geboortedatum"
//         aria-label="Geboortedatum"
//       />
//       <input type="submit" value="Verzenden" />
//     </form>
//   );
// }

// oefening 2: voeg een functie toe om het submit event af te handelen.

export default function App() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Je bent geboren op " + event.target.geboortedatum.value);
    console.log(event);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        name="geboortedatum"
        placeholder="Je geboortedatum"
        aria-label="Geboortedatum"
      />
      <input type="submit" value="Verzenden" />
    </form>
  );
}
