import React, { useState } from "react";
import Fruit from "./components/Fruit";
import "./App.css";

// oefening 1:

const fruits = ["apple", "apple", "apple", "apple", "apple", "apple"];
//of:
//const fruits = Array(6).fill("apple");

//Er zijn natuurlijk meerdere goede antwoorden/manieren mogelijk, dit is er slechts één.
function App() {
  return (
    <div className="container">
      <div className="basket">
        {fruits.map((fruit, index) => {
          return <Fruit key={`${fruit}-${index}`} type={fruit} />;
        })}
      </div>
    </div>
  );
}

export default App;

// oefening 2: in de fruitmand, toon 3 appels en 4 bananen

// const fruits = [
//   "apple",
//   "apple",
//   "apple",
//   "banana",
//   "banana",
//   "banana",
//   "banana",
// ];
// of:
// const fruits = [...Array(7)].map((item, index) =>
//   index < 3 ? "apple" : "banana"
// );

// function App() {
//   return (
//     <div className="container">
//       <div className="basket">
//         {fruits.map((fruit, index) => {
//           return <Fruit key={`${fruit}-${index}`} type={fruit} />;
//         })}
//       </div>
//     </div>
//   );
// }

// oefening 3:

// Omdat we de data nu gaan muteren (d.w.z. wijzigen: we gaan items verwijderen uit de `fruits` array),
// hebben we state nodig in plaats van een statische variabele
// de handleClick functie ontvang je als prop in de `Fruit` component

// function App() {
//   const initialFruits = Array(10).fill("apple");
//   const [fruits, setFruits] = useState(initialFruits);

//   const handleClick = () => {
//     setFruits(fruits.slice(0, fruits.length - 1));
//   };

//   return (
//     <div className="container">
//       <div className="basket">
//         {fruits.map((fruit, index) => {
//           return (
//             <Fruit
//               key={`${fruit}-${index}`}
//               type={fruit}
//               onClick={handleClick}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// bonus:
// met deze code wordt de laatste appel in het rijtje verwijderd,
// ook wanneer je op de eerste appel klikt.. dat is niet helemaal wat we willen!
// je zou misschien denken dat je index van de appel kunnen gebruiken, maar..
// elke appel heeft dezelfde naam, en dus hebben we een andere propery om duidelijk te maken
// of de appel verwijderd is of niet: met die propery kunnen we de styling aanpassen, zodat het lijkt
// alsof de appel verwijderd is

// function App() {
//   const initialFruits = Array.from({ length: 10 }, () => ({
//     type: "apple",
//     wasDeleted: false,
//   }));
//   const [fruits, setFruits] = useState(initialFruits);

//   const handleClick = (index) => {
//     setFruits((prevState) => [
//       ...prevState.map((fruit, _index) =>
//         _index === index ? { ...fruit, wasDeleted: true } : fruit
//       ),
//     ]);
//   };

//   return (
//     <div className="container">
//       <div className="basket">
//         {fruits.map((fruit, index) => (
//           <Fruit
//             key={`${fruit.type}-${index}`}
//             fruit={fruit}
//             index={index}
//             onClick={handleClick}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
