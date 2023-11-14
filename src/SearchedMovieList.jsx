import { Link } from "react-router-dom";
const SearchedMovieList = ({ SearchMovieList }) => {
  return (
    <div className="movie-list">
      {SearchMovieList.map((movie) => {
        const { id, poster_path, title } = movie;
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

export default SearchedMovieList;
