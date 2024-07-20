import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    console.log(json)
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, [])
  return (
    <div>
      {loading ? <h1>Loading...</h1> : null}
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <img src={movie.medium_cover_image} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
            <ul>

              {movie.genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}

            </ul>
          </div>
        ))}
      </div>
      {movies.map((movie) => <li>{movie.title}</li>)}
    </div>
  )
}

export default App;
