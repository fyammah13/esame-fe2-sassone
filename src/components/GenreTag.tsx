import type { GenreTagProps } from '../types/movie';

const GenreTag = ({ genre }: GenreTagProps) => {
  return <span className="genre">{genre.name}</span>;
};

export default GenreTag;
