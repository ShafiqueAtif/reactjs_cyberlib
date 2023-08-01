import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";

//7e2cf13eadmsh5325f1f88b39d04p18e553jsnf1b90a1ad042 apikey

const API_URL = "Enter the App Key";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>Cyber Movie Reel</h1>
      <div className="search">
        <input
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => {
            searchMovies(searchTerm);
          }}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found !</h2>
        </div>
      )}
    </div>
  );
}

export default App;
