import { Link } from 'react-router-dom';
import type { HeaderProps } from '../types/movie';

const Header = ({ titolo = 'Movie App' }: HeaderProps) => {
  return (
    <header className="header">
      <div>
        <div className="header__brand">{titolo}</div>
      </div>
      <nav className="header__nav">
        <Link to="/">Home / Elenco</Link>
      </nav>
    </header>
  );
};

export default Header;
