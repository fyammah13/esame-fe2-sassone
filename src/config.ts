export const getTmdbApiKey = (): string => {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  if (!apiKey) {
    throw new Error('Configura VITE_TMDB_API_KEY nel file .env');
  }

  return apiKey;
};
