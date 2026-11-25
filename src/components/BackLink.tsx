import { Link } from 'react-router-dom';

const BackLink = () => {
  return (
    <Link className="back-link" to="/">
      ← Torna all’elenco
    </Link>
  );
};

export default BackLink;
