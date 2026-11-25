import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BackLink from '../components/BackLink';
import GenreTag from '../components/GenreTag';
import { getTmdbApiKey } from '../config';
import type { MovieDetail } from '../types/movie';
import { formattaData } from '../utils';

const BASE_POSTER = 'https://image.tmdb.org/t/p/w500';

const MovieDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const caricaDettaglio = async () => {
      if (!id) return;

      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${getTmdbApiKey()}`
        );
        if (!res.ok) {
          throw new Error('Errore nel caricamento del film');
        }

        const data: MovieDetail = await res.json();
        setMovie(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Errore imprevisto');
      } finally {
        setLoading(false);
      }
    };

    caricaDettaglio();
  }, [id]);

  if (loading) {
    return (
      <section>
        <BackLink />
        <p className="messaggio-stato">Caricamento dettaglio in corso...</p>
      </section>
    );
  }

  if (error || !movie) {
    return (
      <section>
        <BackLink />
        <p className="messaggio-stato">{error ?? 'Film non trovato.'}</p>
      </section>
    );
  }

  return (
    <section>
      <BackLink />

      <article className="detail">
        <div>
          <div className="detail__poster">
            {movie.poster_path ? (
              <img
                src={`${BASE_POSTER}${movie.poster_path}`}
                alt={movie.title}
              />
            ) : (
              <span>Poster non disponibile</span>
            )}
          </div>
        </div>

        <div>
          <h1 className="detail__title">{movie.title}</h1>
          {movie.tagline && (
            <p className="detail__tagline">“{movie.tagline}”</p>
          )}

          <ul className="detail__meta">
            <li>Uscita: {formattaData(movie.release_date)}</li>
            <li>Durata: {movie.runtime ? `${movie.runtime} min` : 'N/D'}</li>
            <li>Voto: {movie.vote_average.toFixed(1)}</li>
            <li>Voti: {movie.vote_count.toLocaleString('it-IT')}</li>
            <li>Stato: {movie.status}</li>
            <li>Lingua: {movie.original_language.toUpperCase()}</li>
          </ul>

          {movie.genres.length > 0 && (
            <div className="detail__genres">
              {movie.genres.map((genre) => (
                <GenreTag key={genre.id} genre={genre} />
              ))}
            </div>
          )}

          <p className="detail__overview-label">Trama</p>
          <p className="detail__overview">
            {movie.overview || 'Nessuna trama disponibile.'}
          </p>

          {movie.production_companies.length > 0 && (
            <p className="card__meta">
              Produzione:{' '}
              {movie.production_companies.map((c) => c.name).join(' · ')}
            </p>
          )}
        </div>
      </article>
    </section>
  );
};

export default MovieDetailPage;
