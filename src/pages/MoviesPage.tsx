import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import type { MovieListItem, MovieSearchResponse } from '../types/movie';

const URL_ELENCO =
  'https://api.themoviedb.org/3/search/movie?query=The%20Lord%20of%20the%20Rings&include_adult=false&language=en-US&page=1&api_key=YOUR_TMDB_API_KEY';

const MoviesPage = () => {
  const [movies, setMovies] = useState<MovieListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const caricaFilm = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(URL_ELENCO);
        if (!res.ok) {
          throw new Error('Errore nel caricamento dei film');
        }

        const data: MovieSearchResponse = await res.json();
        setMovies(data.results.slice(0, 20));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Errore imprevisto');
      } finally {
        setLoading(false);
      }
    };

    caricaFilm();
  }, []);

  if (loading) {
    return <p className="messaggio-stato">Caricamento film in corso...</p>;
  }

  if (error) {
    return <p className="messaggio-stato">{error}</p>;
  }

  return (
    <section>
      <h1 className="page-title">The Lord of the Rings</h1>
      <p className="page-sub">Risultati trovati: {movies.length}</p>

      {movies.length === 0 ? (
        <p className="messaggio-stato">Nessun film trovato.</p>
      ) : (
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </section>
  );
};

export default MoviesPage;
