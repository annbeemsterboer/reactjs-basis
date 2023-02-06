import React from "react";
import Fruit from "./components/Fruit";
import "./App.css";

/* oefening 1: Kun je ervoor zorgen dat de  code hieronder 1 appel
in de fruitmand laat zien. Dit kun je doen door een prop met 
naam `type` mee te geven aan het Fruit component (child) */

function App() {
  return (
    <div className="container">
      <div className="basket"></div>
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

Kun je in de mand 3 appels en 4 bananen laten zien?

*/
