import Nav from "./Nav";
import NavItem from "./NavItem";
import List from "./List";
import ListItem from "./ListItem";

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
];

export function App() {
  return (
    <div className="divide-y divide-slate-100 max-w-md m-auto mt-10 bg-white rounded-xl drop-shadow-xl">
      <Nav>
        <NavItem href="/new" isActive>
          New Releases
        </NavItem>
        <NavItem href="/top">Top Rated</NavItem>
        <NavItem href="/picks">Vincent’s Picks</NavItem>
      </Nav>
      <List>
        {MOVIES.map(function (movie) {
          return <ListItem key={movie.id} movie={movie} />;
        })}
      </List>
    </div>
  );
}
