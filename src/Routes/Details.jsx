import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchMovieDetail from "../fetchMovieDetail";
const Details = () => {
  const { id } = useParams();
  const { isLoading, isError, data } = useQuery(
    ["MovieDetails", id],
    fetchMovieDetail
  );

  if (isLoading) {
    return <h1 style={{ color: "white" }}>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error fetching data</h1>;
  }

  const { original_title, overview, popularity, poster_path, release_date } =
    data;
  return (
    <div className="movie-card">
      <div className="poster-container">
        <img src={poster_path} alt="poster" className="poster" />
      </div>
      <div className="movie-details">
        <h2>{`Title :${original_title}`}</h2>
        <p>{`Description: ${overview}`}</p>
        <p>{`Release Date: ${release_date}`}</p>
        <p>{`Popularity: ${popularity}`}</p>
      </div>
    </div>
  );
};
export default Details;
