import "./App.css";

// Opdracht 1: maak een html-formulier met een inputveld en een verzendknop.

// export function App() {
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

// Opdracht 2: voeg een functie toe om het submit event af te handelen.

export function App() {
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
