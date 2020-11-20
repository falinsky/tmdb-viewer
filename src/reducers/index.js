import { combineReducers } from 'redux';
import popularMoviesReducer from '../features/popular-movies/popularMoviesSlice';
import genresReducer from '../features/genres/genresSlice';
import entities from './entities';
import movieRecommendationsReducer from '../features/movie-recommendations/movieRecommendationsSlice';
import favorites from './favorites';
import searchMovies from './searchMovies';

export default combineReducers({
  popularMovies: popularMoviesReducer,
  genres: genresReducer,
  entities,
  movieRecommendations: movieRecommendationsReducer,
  favorites,
  searchMovies,
});
