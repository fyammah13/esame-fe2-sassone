import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shell from './components/Shell';
import MoviesPage from './pages/MoviesPage';
import MovieDetailPage from './pages/MovieDetailPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shell />}>
          <Route index element={<MoviesPage />} />
          <Route path="movies/:id" element={<MovieDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
