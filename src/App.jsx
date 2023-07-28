import movies from './api/movies.json';
import './App.scss';
import { MovieList } from './components/MovieList';

export const App = () => (
  <div className="page">
    <div className="page-content">
      <MovieList movies={movies.slice(0, 2)} />
    </div>

    <div className="sidebar" data-cy="Sidebar">
      Sidebar will be here
    </div>
  </div>
);
