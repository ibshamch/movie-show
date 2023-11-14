export default async function fetchSearchedMovie({ queryKey }) {
  const input = queryKey[1];
  const apiKey = "fcf2f2dc3707b096720754062fdacf03";
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${input}`
    );
    const data = await response.json();

    const movies = data.results;

    // Add complete poster URL to each movie
    movies.forEach((movie) => {
      movie.poster_path = `${baseUrl}${movie.poster_path}`;
    });

    return movies;
  } catch (error) {
    console.error("Error:", error);
  }
}
