import React from "react";
import "./App.css";

const LIJST = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

// oefening 1: toon alle getallen in een lijst, gebruik hiervoor de
// html elementen <li> en <ul>.

export default function App() {
  return (
    <ul>
      {LIJST.map(function (nummer) {
        return <li key={nummer}>{nummer}</li>;
      })}
    </ul>
  );
}

// oefening 2: Hetzelfde als oefening 1, maar toon nu alleen getallen die
// deelbaar zijn door 2 (even getallen). Schrijf hiervoor een functie isEven
// die je aanroept vanuit de App component.

// function isEven(getal) {
//   return getal % 2 === 0;
// }

// export default function App() {
//   const alleenEven = LIJST.filter(isEven);

//   return (
//     <ul>
//       {alleenEven.map(function (nummer) {
//         return <li key={nummer}>{nummer}</li>;
//       })}
//     </ul>
//   );
// }

// oefening 3: Hetzelfde als oefening 1, maar nu sorteer je de lijst van getallen in omgekeerde volgorde.
// Op het scherm toon je de grootste getallen dus als eerste.

// export default function App() {
//   const omgekeerdeLijst = LIJST.slice().reverse();

//   return (
//     <ul>
//       {omgekeerdeLijst.map(function (nummer) {
//         return <li key={nummer}>{nummer}</li>;
//       })}
//     </ul>
//   );
// }

// oefening 4: Hetzelfde als oefening 1, maar nu toon je de oneven getallen
// als een grijs bolletje. Gebruik hiervoor de CSS class 'grijs'. In React
// gebruik je className voor de class, dus: <li className="grijs">...</li>.

// function isEven(getal) {
//   return getal % 2 === 0;
// }

// export default function App() {
//   function renderNummer(number) {
//     if (isEven(number)) {
//       return <li key={number}>{number}</li>;
//     }
//     return (
//       <li key={number} className="grijs">
//         {number}
//       </li>
//     );
//   }

//   return <ul>{LIJST.map(renderNummer)}</ul>;
// }
