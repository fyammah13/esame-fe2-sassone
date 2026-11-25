import { Link } from 'react-router-dom';
import type { MovieCardProps } from '../types/movie';
import { formattaData } from '../utils';

const BASE_POSTER = 'https://image.tmdb.org/t/p/w500';

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <article className="card">
      <div className="card__poster">
        {movie.poster_path ? (
          <img
            src={`${BASE_POSTER}${movie.poster_path}`}
            alt={movie.title}
          />
        ) : (
          <span>Poster non disponibile</span>
        )}
      </div>

      <div className="card__body">
        <h2 className="card__title">{movie.title}</h2>
        <p className="card__meta">
          Uscita: {formattaData(movie.release_date)} · Voto:{' '}
          {movie.vote_average.toFixed(1)}
        </p>
        <p className="card__overview">
          {movie.overview || 'Nessuna trama disponibile.'}
        </p>
        <Link className="card__cta" to={`/movies/${movie.id}`}>
          Dettaglio
        </Link>
      </div>
    </article>
  );
};

export default MovieCard;
