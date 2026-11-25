import { useParams } from 'react-router-dom';

const MovieDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1 className="detail__title">Dettaglio film #{id}</h1>
    </div>
  );
};

export default MovieDetailPage;
