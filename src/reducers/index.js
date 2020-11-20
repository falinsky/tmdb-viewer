import { combineReducers } from 'redux';
import popularMoviesReducer from '../features/popular-movies/popularMoviesSlice';
import genres from './genres';
import entities from './entities';
import movieRecommendations from './movieRecommendations';
import favorites from './favorites';
import searchMovies from './searchMovies';

export default combineReducers({
  popularMovies: popularMoviesReducer,
  genres,
  entities,
  movieRecommendations,
  favorites,
  searchMovies,
});
