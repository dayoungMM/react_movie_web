import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    const getMovie = async () => {
        const json = await ((await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json());
        setLoading(false);
        setMovie(json.data.movie);
        return json;
    };
    useEffect(() => {
        setMovie(getMovie());
    }, [])

    return (
        <div>
            {loading ? <h1>Loading...</h1> : null}
            <div>
                <h1>{movie.title}</h1>
                <img src={movie.medium_cover_image} alt={movie.title} />
                <h3>{movie.year}</h3>
                <p>{movie.summary}</p>
            </div>


        </div>
    )
}

export default Detail;