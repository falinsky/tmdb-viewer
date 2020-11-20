import { combineReducers } from 'redux';
import popularMoviesReducer from '../features/popular-movies/popularMoviesSlice';
import genresReducer from '../features/genres/genresSlice';
import entities from './entities';
import movieRecommendations from './movieRecommendations';
import favorites from './favorites';
import searchMovies from './searchMovies';

export default combineReducers({
  popularMovies: popularMoviesReducer,
  genres: genresReducer,
  entities,
  movieRecommendations,
  favorites,
  searchMovies,
});
