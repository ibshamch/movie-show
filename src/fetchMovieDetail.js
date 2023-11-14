export default async function fetchMovieDetail({ queryKey }) {
  const id = queryKey[1];
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${`fcf2f2dc3707b096720754062fdacf03`}`
    );
    const data = await response.json();
    return {
      ...data,
      poster_path: `${baseUrl}${data.poster_path}`,
    };
  } catch (error) {
    console.error("Error:", error);
  }
}
