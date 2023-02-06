import React, { useState } from "react";
import Fruit from "./components/Fruit";
import "./App.css";

// oefening 1: Kun je ervoor zorgen dat de code hieronder 1 appel in de fruitmand laat zien.

//Er zijn natuurlijk meerdere goede antwoorden/manieren mogelijk, dit is er slechts één.
function App() {
  return (
    <div className="container">
      <div className="basket">
        <Fruit type="apple" />
      </div>
    </div>
  );
}

export default App;

/* 
oefening 2: 

Kun je de component Fruit zo wijzigen dat het 
type standaard op "apple" staat? 

*/

/* 
oefening 3: 

Kun je de component Fruit zo wijzigen dat je in plaats een de prop "type"
de props "apple" en "banana" kunt gebruiken? De component werkt dan als volgt:

<Fruit apple /> --> toont een appel
<Fruit banana /> --> toont een banaan
*/

/* 
oefening 4: 

Kun je een nieuwe component Mand maken die
als children meerdere Fruit componenten toont? Dus op de volgende
manier:

<Mand>
  <Fruit type="apple" />
  <Fruit type="banana" />
</Mand>

*/

/* 
oefening 5:

Kun je een "onClick handler" toevoegen aan de Fruit component? Als er iemand op
de appel klikt, dan zal deze een alert tonen met de tekst "I like apples!". 
De alert-functie roep je als volgt aan: alert("I like apples!");

*/

/* 
oefening 6: 

Kun je in de mand 3 appels en 4 bananen laten zien? */

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

// oefening 6:

// TODO: oefening verplaatsen naar state? (als extra oefening?)

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
