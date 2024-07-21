import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styles from './Movie.module.css';

function Movie({id, year, medium_cover_image, title, summary, genres}){
    return (
        <div className={styles.movie}>
            <img src={medium_cover_image} alt={title} className={styles.movie__img} />
            <h2 className={styles.movie__title}>
              <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <h3 className={styles.movie__year}>{year}</h3>
            <p>{summary.length > 300 ? `${summary.slice(0,300)}...` : summary}</p>
            <ul className={styles.movie__genres}>

              {genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}

            </ul>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;