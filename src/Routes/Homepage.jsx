import { useState, useEffect } from "react";
import useSearchMovieList from "../useSearchMovieList";
import InputSearch from "../InputSearch";
import PopularMovieList from "../PopularMovieList";
import SearchedMovieList from "../SearchedMovieList";
const Homepage = ({}) => {
  const [input, setInput] = useState("");
  const [popularMovies, setPopularMovies] = useState([]);
  const { data: SearchMovieList, error } = useSearchMovieList(input);
  console.log(SearchMovieList);
  useEffect(() => {
    const apiKey = "fcf2f2dc3707b096720754062fdacf03";
    const posterBaseUrl = "https://image.tmdb.org/t/p/w500";

    const fetchRandomMovies = async () => {
      try {
        const pageNumber = Math.floor(Math.random() * 500) + 1;

        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${pageNumber}`
        );
        const data = await response.json();

        const movies = data.results.map((movie) => {
          return {
            ...movie,
            poster_path: `${posterBaseUrl}${movie.poster_path}`,
          };
        });
        setPopularMovies(movies);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchRandomMovies();
  }, []);

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="App">
      <InputSearch input={input} setInput={setInput} />
      {SearchMovieList && SearchMovieList.length > 0 ? (
        <SearchedMovieList SearchMovieList={SearchMovieList} />
      ) : (
        <PopularMovieList popularMovies={popularMovies} />
      )}
    </div>
  );
};

export default Homepage;
