const MOVIES = [
  {
    title: "Prognosis Negative",
    id: "prognosis-negative",
    starRating: "2.66",
    rating: "PG-13",
    year: "2021",
    genre: "Comedy",
    runtime: "1h 46m",
    cast: "Simon Pegg, Zach Galifianakis",
    image: "/prognosis-negative.jpg",
  },
  {
    title: "Rochelle, Rochelle",
    id: "rochelle-rochelle",
    starRating: "3.25",
    rating: "R",
    year: "2020",
    genre: "Romance",
    runtime: "1h 56m",
    cast: "Emilia Clarke",
    image: "/rochelle.jpg",
  },
  {
    title: "Death Blow",
    id: "death-blow",
    starRating: "4.95",
    rating: "18A",
    year: "2020",
    genre: "Action",
    runtime: "2h 5m",
    cast: "Idris Elba, John Cena, Thandiwe Newton",
    image: "/death-blow.jpg",
  },
]

export default function App() {
  return <div className="divide-y divide-slate-100 max-w-md m-auto mt-10 bg-white rounded-xl drop-shadow-xl">
    <a className="block px-3 py-2 rounded-md bg-sky-500 text-white" href="https://reactjs-basis.vercel.app/oefeningen/denken-in-componenten" target="blank">Lees opdracht</a>
  </div>
}