import { useState, useEffect } from 'react';
import Movie from '../components/Movie';
import styles from './Home.module.css';
function Home() {
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
        <div className={styles.container}>
            {loading ? <h1>Loading...</h1> : null}
            <div className={styles.movies}>
                {movies.map((movie, index) => (
                    <Movie
                        key={index}
                        id={movie.id}
                        year={movie.year}
                        medium_cover_image={movie.medium_cover_image}
                        title={movie.title}
                        summary={movie.summary}
                        genres={movie.genres}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home;