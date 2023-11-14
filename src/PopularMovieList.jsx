import { Link } from "react-router-dom";
const PopularMovieList = ({ popularMovies }) => {
  return (
    // Link main change krna hai cards ko
    <div className="movie-list">
      {popularMovies.map((movie) => {
        const { title, id, poster_path } = movie;
        return (
          <Link to={`/details/${id}`} className="movie-card" key={id}>
            <div className="poster-container">
              <img className="poster" src={poster_path} alt="poster" />
            </div>
            <div className="movie-details">
              <h2>{title}</h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default PopularMovieList;
