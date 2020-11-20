import { combineReducers } from 'redux';
import popularMoviesReducer from '../features/popular-movies/popularMoviesSlice';
import genresReducer from '../features/genres/genresSlice';
import entities from './entities';
import movieRecommendationsReducer from '../features/movie-recommendations/movieRecommendationsSlice';
import favoritesReducer from '../features/favorites/favoritesSlice';
import searchMoviesReducer from '../features/search-movies/searchMoviesSlice';

export default combineReducers({
  popularMovies: popularMoviesReducer,
  genres: genresReducer,
  entities,
  movieRecommendations: movieRecommendationsReducer,
  favorites: favoritesReducer,
  searchMovies: searchMoviesReducer,
});
