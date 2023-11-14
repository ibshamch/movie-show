import { useQuery } from "@tanstack/react-query";
import fetchSearchedMovie from "./fetchSearchedMovies";
export default function useSearchMovieList(query) {
  const results = useQuery(["searchedMovieData", query], fetchSearchedMovie);
  return results;
}
