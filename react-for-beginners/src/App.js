import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  // const fetch = require('node-fetch');

  const url = 'https://api.themoviedb.org/3/authentication';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzFiMTFhZjY4YWRmODZmNzRkNjk2N2I2YTIyYzNlYSIsIm5iZiI6MTcyMDQxNTU5MS4zMDgxNDEsInN1YiI6IjY2OGI3MjFmZjNkODRjZjFlYjk4YzA3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uL9SjrmW7h2iMymPK-BpgchfQlc3IcsPKvTLs5YCAak'
    }
  };

  useEffect(() => {
    fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
  }, [])
  return (
    <div>
      {loading ? <h1>Loading...</h1> : null}
      {movies.map((movie) => <li>{movie.name}</li>)}
    </div>
  )
}

export default App;
